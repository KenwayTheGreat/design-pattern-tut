abstract class Product {
  name: string;
  quantity: number;
  price: number;
  constructor(name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  getItems() {
    console.log(`Your have ordered ${this.name} x ${this.quantity} : ${this.price}$`);
  }
}
export default Product;