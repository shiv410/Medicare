package com.medicare.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Integer>{

	    List<Medicine> findByCategoryName(String categoryName);
		
}
