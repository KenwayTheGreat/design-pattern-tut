abstract class MenuItem {
  name: string;
  quantity: number;
  price: number;
  constructor(name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  getItem() {
    console.log(`Your have ordered ${this.name} x ${this.quantity} : ${this.price}$`);
  }
}
  export default MenuItem;