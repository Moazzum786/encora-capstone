package com.techademy.shoppingcart.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class UpdateItemRequest {
    @NotNull
    @Min(0)
    private Integer quantity; 

    public UpdateItemRequest() {}

    public UpdateItemRequest(Integer quantity) { 
    	this.quantity = quantity; 
    	}

    public Integer getQuantity() {
    	return quantity;
    	}
    public void setQuantity(Integer quantity) { 
    	this.quantity = quantity;
    	}
}
