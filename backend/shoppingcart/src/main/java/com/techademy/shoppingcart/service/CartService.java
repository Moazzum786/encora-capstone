package com.techademy.shoppingcart.service;

import com.techademy.shoppingcart.dto.*;
import com.techademy.shoppingcart.entity.Cart;
import com.techademy.shoppingcart.entity.CartItem;
import com.techademy.shoppingcart.exception.NotFoundException;
import com.techademy.shoppingcart.repository.CartRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@Transactional
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository repo) {
        this.cartRepository = repo;
    }

    public CartDto getCart(String userId) {
        Cart cart = cartRepository.findById(userId).orElseGet(() -> new Cart(userId));
        return toDto(cart);
    }

    public CartDto addItem(String userId, AddItemRequest req) {
        Cart cart = cartRepository.findById(userId).orElseGet(() -> new Cart(userId));
        
        CartItem item = new CartItem(req.getProductId(), req.getQuantity());
        cart.addOrUpdateItem(item);
        Cart saved = cartRepository.save(cart);
        return toDto(saved);
    }

    public CartDto updateItem(String userId, String productId, UpdateItemRequest req) {
        Cart cart = cartRepository.findById(userId).orElseThrow(() -> new NotFoundException("Cart not found for user: " + userId));
        if (req.getQuantity() == 0) {
            cart.removeItemByProductId(productId);
        } else {
            boolean found = false;
            for (CartItem it : cart.getItems()) {
                if (it.getProductId().equals(productId)) {
                    it.setQuantity(req.getQuantity());
                    found = true;
                    break;
                }
            }
            if (!found) {
               
                CartItem newItem = new CartItem(productId, req.getQuantity());
                cart.addOrUpdateItem(newItem);
            }
        }
        Cart saved = cartRepository.save(cart);
        return toDto(saved);
    }

    public void removeItem(String userId, String productId) {
        Cart cart = cartRepository.findById(userId).orElseThrow(() -> new NotFoundException("Cart not found for user: " + userId));
        cart.removeItemByProductId(productId);
        cartRepository.save(cart);
    }

    public void clearCart(String userId) {
        Cart cart = cartRepository.findById(userId).orElseThrow(() -> new NotFoundException("Cart not found for user: " + userId));
        cart.clear();
        cartRepository.save(cart);
    }

    private CartDto toDto(Cart cart) {
        return new CartDto(cart.getUserId(),
                cart.getItems().stream()
                        .map(i -> new CartItemDto(i.getProductId(), i.getQuantity()))
                        .collect(Collectors.toList()));
    }
}
