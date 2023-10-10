import { Category } from "./category";

export class Medicine {
    id?: number;
    name!: string;
    description!: string;
    brand!: string;
    availableQuantity!: number;
    price!: number;
    category!: Category;
    isActive!: boolean;
    image?: any;

    // For cart
    quantityInCart: number = 0;

}
