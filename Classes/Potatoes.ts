import Product from "./Product";

class Potatoes extends Product {
    type: 'Fri' | 'Curly' | 'Croquettes';

    constructor(type: 'Fri' | 'Curly' | 'Croquettes', name: string, quantity: number, price: number) {
        super(name, quantity, price)
        this.type = type;
    }
    getItems() {
        super.getItems();
        console.log(`Your Potato is ${this.type}`);
    }
}
export default Potatoes;