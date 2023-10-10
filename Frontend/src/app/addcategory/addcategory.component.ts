import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  category: Category = {
    name: '',
    description: ''
  };

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  addCategory(): void {
    this.categoryService.addCategory(this.category).subscribe(data => {
      console.log('Category added successfully!', data);
      this.category = { name: '', description: '' };
      this.router.navigate(["/categories"])
    });
  }

}
