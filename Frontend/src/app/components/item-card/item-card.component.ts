import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CartService  } from '../../core/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor(private products: ProductService,
                       private cart: CartService ) { }
  productList:[] = [];

  ngOnInit(): void {
    this.products.getAllProducts().subscribe( response => {
      console.log(response);
      this.productList = response.data
    });
  }



  _addItemToCart( id, quantity): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.cart.addToCart(payload).subscribe(() => {
      this.ngOnInit();
      alert('Product Added');
    });
  }

}
