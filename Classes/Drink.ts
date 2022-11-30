import Product from "./Product";

class Drink extends Product {
  constructor(name: string, quantity: number, price: number) {
    super(name, quantity, price)
  }

  getItems() {
    super.getItems();
  }
}

export default Drink;