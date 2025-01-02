import { Injectable, input, signal } from '@angular/core';
import { Product } from '../modules/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([{
    id: 1,
    title: 'Product 1',
    image: 'https://via.placeholder.com/150',
    price: 100,
    stock: 10
  }]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product])
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter(item => item.id !== id));
  }

  constructor() {

   }
}
