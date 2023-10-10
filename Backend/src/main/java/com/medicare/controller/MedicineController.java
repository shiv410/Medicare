package com.medicare.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.medicare.entity.Category;
import com.medicare.entity.Medicine;
import com.medicare.services.CategoryService;
import com.medicare.services.MedicineService;


//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/medicines")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {

	@Autowired
	private MedicineService medicineService;
	
	@Autowired
	private CategoryService categoryService;
	
 
	// Get all medicines
	@GetMapping
	public ResponseEntity<List<Medicine>> getAllMedicines() {
		List<Medicine> medicines = medicineService.getAllMedicines();
		return new ResponseEntity<>(medicines, HttpStatus.OK);
	}

	// Get medicine by ID
	@GetMapping("/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable Integer id) {
		Medicine medicine = medicineService.getMedicineById(id);
		return new ResponseEntity<>(medicine, HttpStatus.OK);
	}

	// Add a new medicine
	@PostMapping
	    public ResponseEntity<Medicine> addMedicine(
	        @RequestParam String name,
	        @RequestParam String description,
	        @RequestParam String brand,
	        @RequestParam Integer availableQuantity,
	        @RequestParam float price,
	        @RequestParam Integer categoryId,
	        @RequestParam boolean isActive,
	        @RequestParam(name = "image", required = false) MultipartFile imageFile
	    ) throws IOException {
		
//		final Logger logger = LoggerFactory.getLogger(MedicineController.class);		
		
		try {
	        Medicine medicine = new Medicine();
	        medicine.setName(name);
	        medicine.setDescription(description);
	        medicine.setBrand(brand);
	        medicine.setAvailableQuantity(availableQuantity);
	        medicine.setPrice(price);
	        medicine.setActive(isActive);

	        // For category
	        Category category = categoryService.getCategoryById(categoryId);
	        medicine.setCategory(category);

	        // For image
//	        String originalFilename = imageFile.getOriginalFilename();
//	        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
//	        String randomID = UUID.randomUUID().toString();
//	        String newImageName = randomID + extension;
	                	        
	        if (imageFile != null) {
	            medicine.setImage(imageFile.getBytes());
	        }

	        Medicine savedMedicine = medicineService.saveMedicine(medicine);
	        System.out.println(name);
	        System.out.println(description);
//	        System.out.println(newImageName);
	        return new ResponseEntity<>(savedMedicine, HttpStatus.CREATED);
	    }catch(Exception e){
//	    	logger.error("Error while inserting data: ", e);
	        throw e;
	    }
		
		
	}

	// Update a medicine
	@PostMapping(value = "/{id}")
    public ResponseEntity<?> updateMedicine(
    		@PathVariable("id") Integer id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("brand") String brand,
            @RequestParam("availableQuantity") Integer availableQuantity,
            @RequestParam("price") float price,
            @RequestParam("category") Category category,
            @RequestParam("isActive") Boolean isActive,
            @RequestParam(name = "image", required = false) MultipartFile imageFile) {
    		try {
            Medicine updatedMedicine = medicineService.updateMedicine(
            		id, 
            		name, 
            		description, 
            		brand, 
            		availableQuantity, 
            		price, 
            		category, 
            		isActive, 
            		imageFile);
            return new ResponseEntity<>(updatedMedicine, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }	
	

	
	// Delete a medicine
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteMedicine(@PathVariable Integer id) {
		medicineService.deleteMedicine(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	@GetMapping("/category/{categoryName}")
    public ResponseEntity<List<Medicine>> getMedicinesByCategoryName(@PathVariable String categoryName) {
        List<Medicine> medicines = medicineService.getMedicinesByCategoryName(categoryName);
        return ResponseEntity.ok(medicines);
    }

}
