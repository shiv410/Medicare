package com.medicare.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Cart;
import com.medicare.entity.CartItem;
import com.medicare.entity.Medicine;
import com.medicare.repository.CartItemRepository;
import com.medicare.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public Cart getCartByUserId(Integer userId) {
        return cartRepository.findByUserId(userId).orElse(new Cart());
    }

    public CartItem addMedicineToCart(Integer cartId, Medicine medicine, int quantity) {
        Cart cart = cartRepository.findByUserId(cartId).orElse(new Cart());
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setMedicine(medicine);
        cartItem.setQuantity(quantity);
        return cartItemRepository.save(cartItem);
    }

}

