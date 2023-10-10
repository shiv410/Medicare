package com.medicare.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.User;
import com.medicare.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	// Register new user / add new user
	public User register(User user) {
		return userRepository.save(user);
	}

	// Login by email and pass
	// public User login(String email, String password) {
	// return userRepository.findByEmailIdAndPassword(email, password);
	// }

	// Find user by user id
	public User getUserById(int id) {
		if (userRepository.findById(id).isPresent()) {
			return userRepository.findById(id).get();
		} else {
			return null;
		}
	}

	// To get all the users
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	// Update USer
	public User updateUser(int id, User user) {
		if (userRepository.findById(id).isPresent()) {
			User updateUser = userRepository.findById(id).get();

			updateUser.setFirstname(user.getFirstname());
			updateUser.setLastname(user.getLastname());
			updateUser.setEmailId(user.getEmailId());
			updateUser.setPassword(user.getPassword());
			updateUser.setGender(user.getGender());
			updateUser.setDateOfBirth(user.getDateOfBirth());

			return userRepository.save(updateUser);
		} else {
			return null;
		}
	}

	// To delete User
	public boolean deleteUser(int id) {
		if (userRepository.findById(id).isPresent()) {
			userRepository.deleteById(id);
			return true;
		} else {
			return false;
		}
	}

	public User findByEmailId(String emailId) {
		return userRepository.findByEmailId(emailId).orElse(null);
	}

	public User authenticate(String emailId, String password) {
		Optional<User> currentUser = userRepository.findByEmailId(emailId);
		if (currentUser.isPresent() && currentUser.get().getPassword().equals(password)) {
			return currentUser.get();
		}
		// return null;
		return new User(emailId, password);
	}

}
