import { Component } from '@angular/core';
import { CartItem } from '../../Models/cartitem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService){}
  getCart()
  {
    this.cartItems=this.cartService.list();
  }
removeFromCart(product:Product)
{
  this.cartService.removeFromCart(product);
}
}
