import MenuItem from "./MenuItem";

class Drink extends MenuItem {
    constructor(name: string, quantity: number, price: number) {
      super(name, quantity, price)
    }
  
    getItem() {
      super.getItem();
    }
  }

  export default Drink;