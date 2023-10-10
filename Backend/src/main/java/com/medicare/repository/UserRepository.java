package com.medicare.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.medicare.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByEmailIdAndPassword(String emailId, String password);

	// List<User> findByEmailId(String emailId);
	Optional<User> findByEmailId(String emailId);

	List<User> findByfirstnameContaining(String firstname);

	List<User> findByfirstnameContainingIgnoreCase(String firstname);

	@Query("from User")
	public List<User> getUsers();

}
