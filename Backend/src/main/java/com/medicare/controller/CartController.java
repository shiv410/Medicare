package com.medicare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Cart;
import com.medicare.entity.CartItem;
import com.medicare.entity.Medicine;
import com.medicare.services.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

	@Autowired
	private CartService cartService;

	@GetMapping("/{userId}")
	public ResponseEntity<Cart> getCartByUserId(@PathVariable Integer userId) {
		Cart cart = cartService.getCartByUserId(userId);
		return ResponseEntity.ok(cart);
	}

	@PostMapping("/{cartId}/add")
	public ResponseEntity<CartItem> addMedicineToCart(@PathVariable Integer cartId, @RequestBody Medicine medicine,
			@RequestParam int quantity) {

		CartItem cartItem = cartService.addMedicineToCart(cartId, medicine, quantity);
		return ResponseEntity.ok(cartItem);
	}

}
