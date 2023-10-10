import { Medicine } from "./medicine";
import { User } from "./user";

export class Cart {
    id!: number;
    medicine!: Medicine;
    userid!: User;
}


export class Order {
    id!: number;
    totalAmount!: number;
    date!: Date;
}
