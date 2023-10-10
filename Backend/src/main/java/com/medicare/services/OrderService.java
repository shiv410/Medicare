package com.medicare.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Order;
import com.medicare.entity.OrderItem;
import com.medicare.entity.User;
import com.medicare.repository.OrderRepository;

@Service
public class OrderService {

	 @Autowired
	    private OrderRepository orderRepository;

	    public Order placeOrder(User user, List<OrderItem> orderItems) {
	        Order order = new Order();
	        order.setUser(user);
	        order.setOrderItems(orderItems);
	        order.setOrderDate(LocalDateTime.now());
	        
	        return orderRepository.save(order);
	    }
	
}
