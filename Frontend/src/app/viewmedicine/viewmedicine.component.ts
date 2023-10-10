import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmedicine',
  templateUrl: './viewmedicine.component.html',
  styleUrls: ['./viewmedicine.component.css']
})
export class ViewmedicineComponent {

  medicines: Medicine[] = [];
  categoryName!: string;
  p!: number;
  searchTerm: string = '';

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllMedicines();
  }

  getAllMedicines(): void {
    this.medicineService.getAllMedicines().subscribe(medicines => this.medicines = medicines);
  }


  // Add to cart
  addToCart(medicine: Medicine) {
    // medicine.quantityInCart += 1;
    medicine.quantityInCart = (medicine.quantityInCart || 0) + 1;
    this.updateLocalStorage();
  }

  // Remove from cart
  removeFromCart(medicine: Medicine) {
    // if (medicine.quantityInCart > 0) {
    //   medicine.quantityInCart -= 1;
    //   this.updateLocalStorage();
    // }
    medicine.quantityInCart = medicine.quantityInCart > 0 ? medicine.quantityInCart - 1 : 0;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.medicines));

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.medicines = JSON.parse(storedCart);
    }
  }

  getMedicineByCategory() {
    const categoryName = this.route.snapshot.paramMap.get('categoryName')!;
    this.medicineService.getMedicinesByCategory(categoryName).subscribe(data => {
      this.medicines = data;
    });
  }


}
