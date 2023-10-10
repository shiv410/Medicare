package com.medicare.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import java.util.*;

@Entity
public class Cart {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    
	    @OneToOne
	    private User user;
	    
	    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
	    private List<CartItem> cartItems = new ArrayList<>();

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public List<CartItem> getCartItems() {
			return cartItems;
		}

		public void setCartItems(List<CartItem> cartItems) {
			this.cartItems = cartItems;
		}
	    
	    
}
