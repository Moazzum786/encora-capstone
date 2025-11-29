package com.techademy.shoppingcart.dto;

import java.util.List;

public class CartDto {
    private String userId;
    private List<CartItemDto> items;

    public CartDto() {}

    public CartDto(String userId, List<CartItemDto> items) {
        this.userId = userId;
        this.items = items;
    }

    public String getUserId() {
    	return userId;
    	}
    public void setUserId(String userId) {
    	this.userId = userId; 
    	}
    public List<CartItemDto> getItems() { 
    	return items;
    	}
    public void setItems(List<CartItemDto> items) { 
    	this.items = items; 
    	}
}
