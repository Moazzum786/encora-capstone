package com.techademy.shoppingcart.controller;

import com.techademy.shoppingcart.dto.*;
import com.techademy.shoppingcart.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/carts")
@Validated
public class CartController {
    private final CartService service;

    public CartController(CartService svc) {
        this.service = svc;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<CartDto> getCart(@PathVariable String userId) {
        return ResponseEntity.ok(service.getCart(userId));
    }

    @PostMapping("/{userId}/items")
    public ResponseEntity<CartDto> addItem(@PathVariable String userId, @Valid @RequestBody AddItemRequest req) {
        return ResponseEntity.ok(service.addItem(userId, req));
    }

    @PutMapping("/{userId}/items/{productId}")
    public ResponseEntity<CartDto> updateItem(@PathVariable String userId,
                                              @PathVariable String productId,
                                              @Valid @RequestBody UpdateItemRequest req) {
        return ResponseEntity.ok(service.updateItem(userId, productId, req));
    }

    @DeleteMapping("/{userId}/items/{productId}")
    public ResponseEntity<Void> removeItem(@PathVariable String userId, @PathVariable String productId) {
        service.removeItem(userId, productId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> clearCart(@PathVariable String userId) {
        service.clearCart(userId);
        return ResponseEntity.noContent().build();
    }
}
