import MenuItem from "./MenuItem";

class Sandwich extends MenuItem {
    size: 'Medium' | 'Large';
  
    constructor(size: 'Medium' | 'Large', name: string, quantity: number, price: number) {
      super(name, quantity, price)
      this.size = size;
    }
    getItem() {
      super.getItem();
      console.log(`Your size is ${this.size}`);
    }
  }
  
  export default Sandwich;