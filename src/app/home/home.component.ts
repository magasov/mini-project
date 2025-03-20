import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = []; 
  filterProducts: any[] = [];
  basket: any[] = [];

  
  constructor(private _productService: ProductsService) {}

  async ngOnInit() {
    this.products = await this._productService.getProducts();
    this.filterProducts = this.products; 
    console.log(this.products); 
  }

  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchText = inputElement?.value.toLowerCase();
    
    if (searchText) {
      this.filterProducts = this.products.filter((product: any) => 
        product.description.toLowerCase().includes(searchText)
      );
    } else {
      this.filterProducts = this.products;
    }
    console.log(this.filterProducts);
  }

  addProductBasket(product: any) {
    this._productService.addProductBasket(product);
  }
}