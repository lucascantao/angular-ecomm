import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "../../pages/cart/cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../pages/cart/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2x1">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
         <app-cart-item [item]="item" />
      }
    </div>
    <app-order-summary />
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
