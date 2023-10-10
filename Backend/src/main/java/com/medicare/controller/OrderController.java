package com.medicare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Order;
import com.medicare.entity.OrderRequest;
import com.medicare.entity.User;
import com.medicare.services.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
	
	 @Autowired
	    private OrderService orderService;
	    
	    @PostMapping("/place")
	    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest orderRequest) {
	        User user =new User() ;
	        user.setId(1);
	        
	        Order order = orderService.placeOrder(user, orderRequest.getItems());
	        
	        return ResponseEntity.ok(order);
	    }

}
