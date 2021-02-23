export enum Category {
    fiction = 0,
    non_fiction = 1,
    detective = 2,
    love_story = 3,
    proffesional = 4
}
export interface IBook {
    id: number;
    name: string;
    description?: string;
    price?: number;
    category: Category;
    createDate: number;
    isAvalable: boolean;
}
export class Book implements IBook {
    id: number;
    name: string;
    description?: string;
    price?: number;
    category: Category;
    createDate: number;
    isAvalable: boolean;
    constructor(id: number, name: string, category: Category, createDate: number, price?: number, description: string = '')
    {
        this.id = id;
        this.name = name;
        this.category= category;
        this.createDate = createDate;
        this.isAvalable = price ? true : false;
        this.price = price;
        this.description = description;
    }
    getCategory() {
        let colorName: string = Category[this.category];
        return colorName;
    }
}
