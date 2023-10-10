package com.medicare.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;

@Entity
@Table(name = "user")
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "userRole")
@DiscriminatorValue("customer")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column
	private String firstname;

	@Column
	private String lastname;

	@Column
	private String emailId;

	@Column(length = 20)
	private String password;

	@Column
	private String gender;

	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;

	public User(int id, String firstname, String lastname, String emailId, String password, String gender,
			Date dateOfBirth) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
		this.password = password;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String emailId2, String password2) {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	
	@Entity
	@DiscriminatorValue("Admin")
	public class Admin extends User {	
		public Admin() {  
			super();
		}
	}

	
//	@DiscriminatorValue("customer")
//	public class Customer extends User {
//		public  Customer() {
//			// TODO Auto-generated constructor stub
//		}
//	}

	@Transient
	public String getDiscriminatorValue() {
		return this.getClass().getAnnotation(DiscriminatorValue.class).value();
	}

}
