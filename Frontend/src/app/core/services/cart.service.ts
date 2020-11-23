import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  
  getAllProducts() {
    return this.http.get(`${environment.apiURL}/product`);
  }
  addToCart(payload) {
    return this.http.post(`${environment.apiURL}/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`${environment.apiURL}/cart`);
  }
  increaseQty(payload) {
    return this.http.post(`${environment.apiURL}/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`${environment.apiURL}/cart/empty-cart`);
  }
}