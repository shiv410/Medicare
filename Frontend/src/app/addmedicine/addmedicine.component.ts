import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent {

  categories: Category[] = [];

  medicine: Medicine = new Medicine();

  selectedImage: File | null = null;


  constructor(
    private medicineService: MedicineService,
    private categoryService: CategoryService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Error loading categories!', error);
      }
    );
  }


  onImageSelected(event: any): void {
    // this.selectedImage = event.target.files;
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append('name', this.medicine.name);
    formData.append('description', this.medicine.description);
    formData.append('brand', this.medicine.brand);
    formData.append('availableQuantity', this.medicine.availableQuantity.toString());
    formData.append('price', this.medicine.price.toString());
    formData.append('categoryId', this.medicine.category.toString());
    formData.append('isActive', this.medicine.isActive.toString());
    if (this.selectedImage) {
      formData.append('image', this.selectedImage, this.selectedImage.name);
    }

    this.medicineService.addMedicine(formData).subscribe(response => {
      alert('Medicine added successfully!');
    });
  }

}