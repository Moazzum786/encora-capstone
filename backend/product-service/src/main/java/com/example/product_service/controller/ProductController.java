package com.example.product_service.controller;

import com.example.product_service.entity.Product;
import com.example.product_service.enums.Gender;
import com.example.product_service.service.ProductService;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public ResponseEntity<Page<Product>> getProducts(
        @RequestParam(value = "category", required = false) List<Long> category,
        @RequestParam(value = "gender", required = false) Gender gender,
        @RequestParam(value = "minPrice", required = false) BigDecimal minPrice,
        @RequestParam(value = "maxPrice", required = false) BigDecimal maxPrice,
        @RequestParam(
            value = "inStockOnly",
            required = false,
            defaultValue = "false"
        ) Boolean inStockOnly,
        @RequestParam(value = "search", required = false) String search,
        @PageableDefault(
            size = 20,
            sort = "id",
            direction = Sort.Direction.DESC
        ) Pageable pageable
    ) {
        Page<Product> products = productService.getFilteredProducts(
            category,
            gender,
            minPrice,
            maxPrice,
            inStockOnly,
            search,
            pageable
        );

        return ResponseEntity.ok(products);
    }
}
