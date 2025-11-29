package com.techademy.shoppingcart.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items", indexes = {@Index(columnList = "product_id")})
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false, length = 100)
    private String productId;

    @Column(nullable = false)
    private Integer quantity = 1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private Cart cart;

    public CartItem() {}

    public CartItem(String productId, Integer quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }

    public Long getId() {
    	return id;
    	}
    public void setId(Long id) {
    	this.id = id;
    	}

    public String getProductId() { 
    	return productId; 
    	}
    public void setProductId(String productId) {
    	this.productId = productId; 
    	}

    public Integer getQuantity() {
    	return quantity;
    	}
    public void setQuantity(Integer quantity) {
    	this.quantity = quantity;
    	}

    public Cart getCart() { 
    	return cart;
    	}
    public void setCart(Cart cart) {
    	this.cart = cart;
    	}
}
