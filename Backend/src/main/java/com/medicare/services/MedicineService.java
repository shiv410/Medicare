package com.medicare.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.medicare.entity.Category;
import com.medicare.entity.Medicine;
import com.medicare.repository.MedicineRepository;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;


    public List<Medicine> getAllMedicines() {
        List<Medicine> medicines = medicineRepository.findAll();
        for (Medicine medicine : medicines) {
            if (medicine.getQuantityInCart() == null) {
                medicine.setQuantityInCart(0);
            }
        }
        return medicines;
    }

    public Medicine getMedicineById(Integer id) {
        Optional<Medicine> medicineOptional = medicineRepository.findById(id);
        if (medicineOptional.isPresent()) {
            return medicineOptional.get();
        }
        // Handle the case when the medicine is not found
        // This could be throwing an exception or returning null
        return null;
    }

    public Medicine saveMedicine(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    // @Transactional
    public Medicine updateMedicine(Integer id,
            String name,
            String description,
            String brand,
            Integer availableQuantity,
            float price,
            Category category,
            Boolean isActive,
            MultipartFile imageFile) throws Exception {
        Medicine medicine = medicineRepository.findById(id).orElse(null);

        if (medicine == null) {
            throw new Exception("Medicine not found with ID: " + id);
        }

        medicine.setName(name);
        medicine.setDescription(description);
        medicine.setBrand(brand);
        medicine.setAvailableQuantity(availableQuantity);
        medicine.setPrice(price);
        medicine.setCategory(category);
        medicine.setActive(isActive);

        if (imageFile != null && !imageFile.isEmpty()) {
            medicine.setImage(imageFile.getBytes());
        }

        return medicineRepository.save(medicine);
    }

    public void deleteMedicine(Integer id) {
        medicineRepository.deleteById(id);
    }
    
    
    public List<Medicine> getMedicinesByCategoryName(String categoryName) {
        return medicineRepository.findByCategoryName(categoryName);
    }

}
