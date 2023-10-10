package com.medicare.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entity.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {}


