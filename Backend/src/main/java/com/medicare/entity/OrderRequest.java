package com.medicare.entity;

import java.util.List;

public class OrderRequest {
	
    private List<OrderItem> items;

	public List<OrderItem> getItems() {
		return items;
	}

	public void setItems(List<OrderItem> items) {
		this.items = items;
	}


}
