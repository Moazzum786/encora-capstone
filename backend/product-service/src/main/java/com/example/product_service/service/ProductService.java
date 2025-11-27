package com.example.product_service.service;

import com.example.product_service.builder.ProductSpecificationBuilder;
import com.example.product_service.entity.Product;
import com.example.product_service.entity.ProductVariant;
import com.example.product_service.enums.Gender;
import com.example.product_service.exception.ProductNotFoundError;
import com.example.product_service.repository.ProductRepository;
import com.example.product_service.repository.ProductVariantRepository;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductVariantRepository productVariantRepository;

    //PRODUCT FILTERING

    public Page<Product> getFilteredProducts(
        List<Long> categoryIds,
        Gender gender,
        BigDecimal minPrice,
        BigDecimal maxPrice,
        Boolean inStockOnly,
        String searchTerm,
        Pageable pageable
    ) {
        Specification<Product> spec = Specification.<Product>where(null)
            .and(ProductSpecificationBuilder.hasCategory(categoryIds))
            .and(ProductSpecificationBuilder.hasGender(gender))
            .and(
                ProductSpecificationBuilder.hasPriceBetween(minPrice, maxPrice)
            )
            .and(
                ProductSpecificationBuilder.searchInNameOrDescription(
                    searchTerm
                )
            );

        if (Boolean.TRUE.equals(inStockOnly)) {
            spec = spec.and(ProductSpecificationBuilder.hasStock());
        }

        return productRepository.findAll(spec, pageable);
    }

    public Product getProductById(Long id) {
        return productRepository
            .findById(id)
            .orElseThrow(() ->
                new ProductNotFoundError(
                    "product with the id " + id + " not found"
                )
            );
    }

    public Page<Product> getProductsByCategory(
        Long categoryId,
        Boolean inStockOnly,
        Pageable pageable
    ) {
        Specification<Product> spec = ProductSpecificationBuilder.hasCategory(
            List.of(categoryId)
        );

        if (Boolean.TRUE.equals(inStockOnly)) {
            spec = spec.and(ProductSpecificationBuilder.hasStock());
        }

        return productRepository.findAll(spec, pageable);
    }

    public Page<Product> searchProducts(String searchTerm, Pageable pageable) {
        Specification<Product> spec =
            ProductSpecificationBuilder.searchInNameOrDescription(searchTerm);
        return productRepository.findAll(spec, pageable);
    }

    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public boolean existsById(Long id) {
        return productRepository.existsById(id);
    }

    // PRODUCT CRUD

    @Transactional
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Transactional
    public Product updateProduct(Long id, Product productDetails) {
        Product product = getProductById(id);

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setGender(productDetails.getGender());
        product.setCategory(productDetails.getCategory());

        return productRepository.save(product);
    }

    @Transactional
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundError("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
    }

    //STOCK MANAGEMENT

    /**
     * Update stock quantity for a variant
     */
    @Transactional
    public ProductVariant updateVariantStock(
        Long variantId,
        Integer newStockQuantity
    ) {
        ProductVariant variant = productVariantRepository
            .findById(variantId)
            .orElseThrow(() ->
                new ProductNotFoundError(
                    "Variant not found with id: " + variantId
                )
            );

        if (newStockQuantity < 0) {
            throw new IllegalArgumentException(
                "Stock quantity cannot be negative"
            );
        }

        variant.setStockQuantity(newStockQuantity);
        return productVariantRepository.save(variant);
    }

    /**
     * Get all variants of a product
     */
    public List<ProductVariant> getProductVariants(Long productId) {
        Product product = getProductById(productId);
        return product.getVariants();
    }

    /**
     * Get a specific variant by ID
     */
    public ProductVariant getVariantById(Long variantId) {
        return productVariantRepository
            .findById(variantId)
            .orElseThrow(() ->
                new ProductNotFoundError(
                    "Variant not found with id: " + variantId
                )
            );
    }
}
