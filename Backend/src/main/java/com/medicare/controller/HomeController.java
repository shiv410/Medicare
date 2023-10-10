package com.medicare.controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpSession;



@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {
	
	@GetMapping({ "/", "/home" })
	public String home(Model model, HttpServletRequest request) {

//		HttpSession session = request.getSession();
//		if (Objects.isNull(session.getAttribute("cartCount")))
//			session.setAttribute("cartCount", 0);
		return null;
	}

}
