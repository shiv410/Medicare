import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private api = 'http://localhost:9090/categories';

  constructor(
    private http: HttpClient
  ) { }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/categories`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.api, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.api}/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.api}/${id}`);
  }


}
