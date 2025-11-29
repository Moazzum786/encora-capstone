package com.techademy.shoppingcart.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carts")
public class Cart {

    @Id
    @Column(name = "user_id", nullable = false, length = 100)
    private String userId;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<CartItem> items = new ArrayList<>();

    public Cart() {}

    public Cart(String userId) {
        this.userId = userId;
    }

    public void addOrUpdateItem(CartItem item) {
        for (CartItem it : items) {
            if (it.getProductId().equals(item.getProductId())) {
                it.setQuantity(item.getQuantity());
                return;
            }
        }
        item.setCart(this);
        items.add(item);
    }

    public void removeItemByProductId(String productId) {
        items.removeIf(i -> i.getProductId().equals(productId));
    }

    public void clear() {
        items.clear();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }
}
