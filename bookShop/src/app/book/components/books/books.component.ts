import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { BOOKS } from '../../models/mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books = BOOKS;
  selectedBook?: Book;
  @Output() buyBook = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void{
    this.selectedBook = book;
  }
  onBuy(book: Book): void{
    this.buyBook.emit(this.selectedBook);
    console.log(this.selectedBook);
  }
}
