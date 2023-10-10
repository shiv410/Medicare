package com.medicare.controller;

import java.util.HashMap;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.LoginRequest;
import com.medicare.entity.User;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import com.medicare.services.UserService;
import com.medicare.validator.EmailValidator;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class LoginController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(HttpServletRequest request,
			@RequestBody LoginRequest loginRequest) {

		Map<String, Object> response = new HashMap<>();

		String emailId = loginRequest.getEmailId();
		String password = loginRequest.getPassword();

		if (EmailValidator.isValid(emailId)) {
			User user = (User) userService.authenticate(emailId, password);

			if (user != null) {
				String userRole;

				if (user.getDiscriminatorValue().equals("Admin")) {
					userRole = "admin";
					System.out.println("Login endpoint hit with email: " + loginRequest.getEmailId());

				} else {
					userRole = "customer";
					System.out.println("Login endpoint hit with email: " + loginRequest.getEmailId());

				}
				response.put("role", userRole);
				HttpSession session = request.getSession();
				session.setAttribute("userEmailId", emailId);
				session.setAttribute("userName", user.getFirstname());

				return ResponseEntity.ok(response);
			} else {
				response.put("errorMessage", "Invalid Credentials");
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
			}
		} else {
			response.put("errorMessage", "Invalid email id");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		}
	}

	@GetMapping("/current")
	public ResponseEntity<UserInfo> getCurrentUser(HttpSession session) {
		String userEmailId = (String) session.getAttribute("userEmailId");
		String userName = (String) session.getAttribute("userName");

		if (userEmailId == null || userName == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		UserInfo userInfo = new UserInfo();
		userInfo.setEmailId(userEmailId);
		userInfo.setFirstname(userName);
		return ResponseEntity.ok(userInfo);
	}

	static class UserInfo {
		private String emailId;
		private String firstname;

		public String getEmailId() {
			return emailId;
		}

		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}
	}

	@GetMapping("/logout")
	public ResponseEntity<String> logout(HttpSession session) {
		session.invalidate();
		return ResponseEntity.ok("Logged out successfully");
	}

}
