package com.medicare.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Medicine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String name;

	@Column
	private String description;

	@Column
	private String brand;

	@Column(name = "available_quantity")
	private Integer availableQuantity;

	@Column
	private float price;

	@ManyToOne
	@JoinColumn(name = "categoryid")
	private Category category;

	@Column(name = "is_active")
	private boolean isActive;

	@Lob
	@Column(name = "image_data", columnDefinition = "MEDIUMBLOB")
	private byte[] image;

	@Column(name = "quantity_in_cart")
	private Integer quantityInCart;

	public Medicine(Integer quantityInCart) {
		this.quantityInCart = quantityInCart;
	}

	public Medicine(Integer id, String name, String description, String brand, Integer availableQuantity, float price,
			Category category, boolean isActive, byte[] image) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.availableQuantity = availableQuantity;
		this.price = price;
		this.category = category;
		this.isActive = isActive;
		this.image = image;
	}

	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Integer getAvailableQuantity() {
		return availableQuantity;
	}

	public void setAvailableQuantity(Integer availableQuantity) {
		this.availableQuantity = availableQuantity;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Integer getQuantityInCart() {
		return quantityInCart;
	}

	public void setQuantityInCart(Integer quantityInCart) {
		this.quantityInCart = quantityInCart;
	}

	@Override
	public String toString() {
		return "Medicine [id=" + id + ", name=" + name + ", description=" + description + ", brand=" + brand
				+ ", availableQuantity=" + availableQuantity + ", price=" + price + ", category=" + category
				+ ", isActive=" + isActive + ", image=" + Arrays.toString(image) + "]";
	}

}
