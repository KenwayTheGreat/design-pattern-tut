import Product from "./Product";

class Sandwich extends Product {
  size: 'Medium' | 'Large';

  constructor(size: 'Medium' | 'Large', name: string, quantity: number, price: number) {
    super(name, quantity, price)
    this.size = size;
  }
  getItems() {
    super.getItems();
    console.log(`Your size is ${this.size}`);
  }
}

export default Sandwich;