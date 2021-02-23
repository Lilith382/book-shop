import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem? : CartItem;
  @Output() incCount = new EventEmitter<number>();
  @Output() decCount = new EventEmitter<number>();
  @Output() delCartItem = new EventEmitter<CartItem>();
  onIncCount(): void {
    if(this.cartItem)
    {
      this.cartItem.count +=1;
      this.incCount.emit(this.cartItem.count);
    }
  }
  onDecCount(): void {
    if(this.cartItem && this.cartItem.count > 0) {
      this.cartItem.count -=1;
      this.decCount.emit(this.cartItem.count);
    }
  }
  onDelete(): void {
    if(this.cartItem) {
      console.log("onDelete");
      this.delCartItem.emit(this.cartItem);
    }
  }
}
