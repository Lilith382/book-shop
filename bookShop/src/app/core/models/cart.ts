import { CartItem } from "./cartItem";

export interface ICart {
    cartItems: CartItem[];
}
export class Cart implements ICart{
    cartItems: CartItem[] = [];
}