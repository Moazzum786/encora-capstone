package com.example.product_service.builder;

import com.example.product_service.entity.Product;
import com.example.product_service.entity.ProductVariant;
import com.example.product_service.enums.Gender;
import jakarta.persistence.criteria.*;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecificationBuilder {

    /**
     * Filter by categories
     */
    public static Specification<Product> hasCategory(List<Long> categoryIds) {
        return (root, query, criteriaBuilder) -> {
            if (categoryIds == null || categoryIds.isEmpty()) return null;
            return root.get("category").get("id").in(categoryIds);
        };
    }

    /**
     * Filter by gender (MEN, WOMEN, UNISEX)
     */
    public static Specification<Product> hasGender(Gender gender) {
        return (root, query, criteriaBuilder) -> {
            if (gender == null) return null;
            return criteriaBuilder.equal(root.get("gender"), gender);
        };
    }

    /**
     * Filter products with price >= minPrice
     */
    public static Specification<Product> hasPriceGreaterThanOrEqual(
        BigDecimal minPrice
    ) {
        return (root, query, criteriaBuilder) -> {
            if (minPrice == null) return null;
            return criteriaBuilder.greaterThanOrEqualTo(
                root.get("price"),
                minPrice
            );
        };
    }

    /**
     * Filter products with price <= maxPrice
     */
    public static Specification<Product> hasPriceLessThanOrEqual(
        BigDecimal maxPrice
    ) {
        return (root, query, criteriaBuilder) -> {
            if (maxPrice == null) return null;
            return criteriaBuilder.lessThanOrEqualTo(
                root.get("price"),
                maxPrice
            );
        };
    }

    /**
     * Filter products within a price range
     */
    public static Specification<Product> hasPriceBetween(
        BigDecimal minPrice,
        BigDecimal maxPrice
    ) {
        return (root, query, criteriaBuilder) -> {
            if (minPrice == null && maxPrice == null) return null;

            if (minPrice != null && maxPrice != null) {
                return criteriaBuilder.between(
                    root.get("price"),
                    minPrice,
                    maxPrice
                );
            } else if (minPrice != null) {
                return criteriaBuilder.greaterThanOrEqualTo(
                    root.get("price"),
                    minPrice
                );
            } else {
                return criteriaBuilder.lessThanOrEqualTo(
                    root.get("price"),
                    maxPrice
                );
            }
        };
    }

    /**
     * Filter products that have at least one variant with stock > 0
     * Uses EXISTS subquery to avoid JOIN conflicts
     */
    public static Specification<Product> hasStock() {
        return (root, query, criteriaBuilder) -> {
            // Create subquery
            Subquery<Integer> subquery = query.subquery(Integer.class);
            Root<ProductVariant> variantRoot = subquery.from(
                ProductVariant.class
            );

            // SELECT 1 FROM product_variants WHERE product_id = p.id AND stock > 0
            subquery
                .select(criteriaBuilder.literal(1))
                .where(
                    criteriaBuilder.equal(variantRoot.get("product"), root),
                    criteriaBuilder.greaterThan(
                        variantRoot.get("stockQuantity"),
                        0
                    )
                );

            return criteriaBuilder.exists(subquery);
        };
    }

    /**
     * Search in both product name and description (OR logic)
     */
    public static Specification<Product> searchInNameOrDescription(
        String searchTerm
    ) {
        return (root, query, criteriaBuilder) -> {
            if (searchTerm == null || searchTerm.trim().isEmpty()) return null;

            String likePattern = "%" + searchTerm.trim().toLowerCase() + "%";

            return criteriaBuilder.or(
                criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("name")),
                    likePattern
                ),
                criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("description")),
                    likePattern
                )
            );
        };
    }
}
