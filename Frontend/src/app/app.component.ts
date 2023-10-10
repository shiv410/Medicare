import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';
import { Category } from './category';
import { MedicineService } from './medicine.service';
import { Medicine } from './medicine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medicare';

  // To get all categories
  categories: Category[] = [];

  medicinesList: any[] = [];
  selectedCategory: string = '';


  constructor(
    private categoryService: CategoryService,
    private medicineService: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }

  getMedicinesByCategory() {
    this.medicineService.getMedicinesByCategory(this.selectedCategory).subscribe(medicines => {
      this.medicinesList = medicines;
    });
  }

}
