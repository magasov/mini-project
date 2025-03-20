import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service'; 

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  private _productService: ProductsService;
  basket: any[] = [];


  constructor(ProductsService: ProductsService) {
  this._productService = ProductsService;
  }

  getBasket() {
    this.basket = this._productService.getBasket()
    console.log(this.basket);
    
  }
}
