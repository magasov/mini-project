import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: any = []
  private basket: any = []


  private productsApi = []

  constructor() {}

  async getProducts() {
    const url = 'https://67407048d0b59228b7f010f0.mockapi.io/lavka';

    console.log(url);
    
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        this.products = data;
        return this.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

getBasket(): any[] {
  const storekedBasket = localStorage.getItem("basket")
  if(storekedBasket) {
    this.basket = JSON.parse(storekedBasket)
  } else {
    this.basket = []
  }
  return this.basket
}


addProductBasket(product: any) {
  
  let basket = JSON.parse(localStorage.getItem("basket") || "[]");

  
  if (!basket.some((prod: any) => prod.id == product.id)) {
    let productBasket = {
      id: product.id,
      desc: product.description,
      image: product.image,
      price: product.price,
      countBasket: 1
    };
    basket.push(productBasket); 
  }

  
  localStorage.setItem("basket", JSON.stringify(basket));
}

}
