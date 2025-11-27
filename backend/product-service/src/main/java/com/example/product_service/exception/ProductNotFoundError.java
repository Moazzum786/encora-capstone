package com.example.product_service.exception;

public class ProductNotFoundError extends RuntimeException {

    public ProductNotFoundError(String message) {
        super(message);
    }
}
