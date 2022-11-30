import Product from "./Product";
interface Order {
  paid: boolean;
  orderNumber: number;
  items: Product[];
  getTotalPrice(): number;
  orderInfo(): Promise<string>;
}
class Observable {

  
  observers: Order[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: Order) {
    this.observers.push(func);
  }

  unsubscribe(func: Order) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data: void) {
    this.observers.forEach(() => console.log(data ,"Notified"));
  }
}
export default Observable;