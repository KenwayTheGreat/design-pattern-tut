import MenuItem from "./MenuItem";

class Potatoes extends MenuItem {
    type: 'Fri' | 'Curly' | 'Croquettes';

    constructor(type: 'Fri' | 'Curly' | 'Croquettes', name: string, quantity: number, price: number) {
        super(name, quantity, price)
        this.type = type;
    }
    getItem() {
        super.getItem();
        console.log(`Your Potato is ${this.type}`);
    }
}
export default Potatoes;