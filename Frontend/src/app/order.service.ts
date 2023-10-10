import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api = 'http://localhost:9090/order';

  constructor(private http: HttpClient) { }

  placeOrder(orderItems: any[]): Observable<any> {
    return this.http.post(`${this.api}/place`, { items: orderItems });
  }

  getSuccessfulOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.api}/orders?userId=${userId}&status=success`);
  }
}
