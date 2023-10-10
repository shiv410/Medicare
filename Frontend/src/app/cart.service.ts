import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private staticUser = {
    id: 1,
    name: 'Shubham Pra',
    email: 'sp@example.com'
  };

  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject(this.cartItems);
  readonly cart$ = this.cartSubject.asObservable();

  private api = 'http://localhost:9090/cart';

  constructor(private http: HttpClient) { }

  addToCart(item: any, quantity: number = 1) {
    const existingItem = this.cartItems.find(cartItem => cartItem.medicine.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ medicine: item, quantity });
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.medicine.id === item.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }

  // Communicate with backend
  saveCart(): Observable<any> {
    const cartData = {
      userId: this.staticUser.id,
      items: this.cartItems
    };
    return this.http.post(`${this.api}/add`, cartData);
  }

  placeOrder(): Observable<any> {
    const orderData = {
      userId: this.staticUser.id,
      items: this.cartItems
    };
    return this.http.post(`${this.api}/order/place`, orderData);
  }

}
