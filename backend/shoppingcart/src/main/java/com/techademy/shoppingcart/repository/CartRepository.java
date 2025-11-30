package com.techademy.shoppingcart.repository;

import com.techademy.shoppingcart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
    Optional<Cart> findByUserId(String userId);
}
