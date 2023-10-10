import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  medicines: Medicine[] = [];
  categoryName!: string;

  cartItems$ = this.cartService.cart$;

  constructor(
    private cartService: CartService,
    private medicineService: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getAllMedicines();
  }

  // getAllMedicines(): void {
  //   this.medicineService.getAllMedicines().subscribe(medicines => this.medicines = medicines);
  // }

  onRemoveItem(item: any) {
    this.cartService.removeFromCart(item);
  }

  onSaveCart() {
    this.cartService.saveCart().subscribe(response => {
      alert('Medicine Added to cart..');
    });
  }

  onPlaceOrder() {
    this.cartService.placeOrder().subscribe(response => {
      this.router.navigate(['/cutomer'])
    });
  }

}
