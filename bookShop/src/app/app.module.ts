import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './book/components/books/books.component';
import { CartComponent } from './core/components/cart/cart.component';
import { CartItemComponent } from './core/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
