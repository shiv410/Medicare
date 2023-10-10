import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private api = 'http://localhost:9090/medicines';

  constructor(
    private http: HttpClient
  ) { }

  // addMedicine(medicine: Medicine): Observable<Medicine> {
  //   return this.http.post<Medicine>(this.api, medicine);
  // }
  addMedicine(formData: FormData): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.api}`, formData);
  }


  getMedicine(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.api}/${id}`);
  }


  getAllMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.api}`);
  }


  // updateMedicine(id: number, formData: FormData): Observable<Medicine> {
  //   return this.http.post<Medicine>(`${this.api}/${id}`, formData);
  // }

  // updateMedicine(medicine: Medicine, image: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('medicine', new Blob([JSON.stringify(medicine)], { type: 'application/json' }));
  //   formData.append('image', image);
  //   return this.http.put(`http://localhost:9090/medicines/update/${medicine.id}`, formData);
  // }


  // updateMedicine(medicine: Medicine, image: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('medicine', new Blob([JSON.stringify(medicine)], { type: "application/json" }));
  //   formData.append('image', image);

  //   return this.http.put(this.api + '/update', formData);
  // }


  // updateMedicine(medicine: any): Observable<any> {
  //   const formData = new FormData();
  //   // formData.append('id', medicine.id);
  //   formData.append('name', medicine.name);
  //   formData.append('description', medicine.description);
  //   formData.append('brand', medicine.brand);
  //   formData.append('availableQuantity', medicine.availableQuantity);
  //   formData.append('price', medicine.price);
  //   formData.append('categoryId', medicine.categoryId);
  //   if (medicine.image) {
  //     formData.append('image', medicine.image);
  //   }

  //   const headers = new HttpHeaders();
  //   headers.set('Accept', 'application/json');

  //   return this.http.post(`${this.api}/update`, formData, {
  //     headers: headers
  //   });
  // }


  updateMedicine(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.api}/${id}`, formData);
  }


  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/categories`);
  }

  deleteMedicine(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }


  uploadImage(medicineId: number, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post(`${this.api}/${medicineId}/upload`, formData);
  }


  getMedicinesByCategory(categoryName: string): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.api}/category/${categoryName}`);
  }

}
