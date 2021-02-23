import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart = new Cart();
  constructor() { }

  ngOnInit(): void {
  }
  getSummary(): number {
      let result: number = 0;
      this.cart.cartItems.forEach(element => {
        result += (element.book.price ?? 0) * element.count;
      });
      return result;
  }
  deleteCartItem(cartItem: CartItem): void {
    this.cart.cartItems = this.cart.cartItems.filter(x=>x.book.id !== cartItem.book.id);
  }
}
