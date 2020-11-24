import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor(private products: ProductService) { }
  productList:[] = [];

  ngOnInit(): void {
    this.products.getAllProducts().subscribe( response => {
      console.log(response);
      this.productList = response.data

    });
  }

}
