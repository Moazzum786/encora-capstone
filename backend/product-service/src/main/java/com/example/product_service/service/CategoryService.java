package com.example.product_service.service;

import com.example.product_service.dto.CategoryListResponseDto;
import com.example.product_service.repository.CategoryRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoryService {

    public CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Transactional(readOnly = true)
    public List<CategoryListResponseDto> getAllCategories() {
        return categoryRepository
            .findAll()
            .stream()
            .map(category ->
                new CategoryListResponseDto(
                    category.getId(),
                    category.getName()
                )
            )
            .collect(Collectors.toList());
    }
}
