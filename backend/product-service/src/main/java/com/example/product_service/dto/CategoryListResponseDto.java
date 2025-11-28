package com.example.product_service.dto;

public class CategoryListResponseDto {

    Long id;
    String name;

    public CategoryListResponseDto() {}

    public CategoryListResponseDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
