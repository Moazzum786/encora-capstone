package com.techademy.shoppingcart.repository;

import com.techademy.shoppingcart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, String> {
    
}
