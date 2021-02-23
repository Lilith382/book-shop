import { Book, Category } from "src/app/book/models/book";
//if price underfind - book unavalable
export const BOOKS: Book[] = [
    new Book(1, 'Angular for Begginer', Category.proffesional, 2020, 100, "Some interesting information"),
    new Book(2, 'JS', Category.fiction, 2012, 120, "Some interesting information"),
    new Book(3, 'C#', Category.detective, 2010, undefined, "Some interesting information")
  ];