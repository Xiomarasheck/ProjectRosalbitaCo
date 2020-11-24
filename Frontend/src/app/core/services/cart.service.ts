import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  
  getAllProducts() {
    return this.http.get(`${environment.apiURL}/products`);
  }
  addToCart(payload) {
    return this.http.post(`${environment.apiURL}/order`, payload);
  }
  getCartItems() {
    return this.http.get(`${environment.apiURL}/order`);
  }
  increaseQty(payload) {
    return this.http.post(`${environment.apiURL}/order`, payload);
  }
  emptyCart() {
    return this.http.delete(`${environment.apiURL}/order/empty-cart`);
  }
}