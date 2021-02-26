import { Book } from "src/app/book/models/book";

export interface ICartItem {
    book: Book;
    count: number;
}
export class CartItem implements ICartItem {
    book: Book;
    count: number;
    constructor(book: Book, count: number)
    {
        this.book = book;
        this.count = count;
    }
}