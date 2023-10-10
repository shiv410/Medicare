import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { Order } from '../cart';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  cartItems$ = this.cartService.cart$;
  orders: Order[] = [];


  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  onPlaceOrder() {
    this.cartItems$.subscribe(cartItems => {
      this.orderService.placeOrder(cartItems).subscribe(response => {
        alert('Payment Successful.. Happy Shopping..');
      });
    });
  }

}
