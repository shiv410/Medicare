import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';


@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent {

  categoryId!: number;
  category: Category = {
    name: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCategory();
  }

  loadCategory(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe(data => {
      this.category = data;
    });
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.category).subscribe(() => {
      alert('Category updated successfully!');
      this.router.navigate(['/categories']);
    });
  }

}
