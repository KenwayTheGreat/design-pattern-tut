import Product from "./Product";

class Meal extends Product {
    items: Product[];
    constructor(name: string, quantity: number, price: number, items: Product[]) {
        super(name, quantity, price);
        this.items = items;
    }
    getItems() {
        console.log(`Your Meal is ${this.name} x ${this.quantity} : ${this.price}$`);
    }
}
export default Meal;