import { AfterViewInit, ElementRef, ViewChild, Component } from '@angular/core';
import { Cart } from './core/models/cart';
import { Book } from './book/models/book';
import { CartItem } from './core/models/cartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'bookShop';
  cart: Cart = new Cart();
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(appTitle: ElementRef) {
    this.appTitle = appTitle;
  }

  ngAfterViewInit(): void {
   
    this.appTitle.nativeElement.textContent = 'Task#2 - Components';
  }

  addCartItem(book: Book){
    
    let existedCartItem = this.cart.cartItems.find(x=>x.book.id === book.id);
    if(existedCartItem){
      existedCartItem.count +=1;
    } else
    {
      let cartItem = new CartItem(book, 1);
      this.cart.cartItems.push(cartItem);
    }
  }
}
