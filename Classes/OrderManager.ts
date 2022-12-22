import Observable from "./Observable";
import Product from "./Product"

class OrderManager {
  static orderNumber: number = 0;

  constructor() {
  }

  static createOrder = (items: Product[], paid: boolean) => ({
    paid,
    orderNumber: this.orderNumber++,
    items,
    getTotalPrice(): number {
      let sum = 0;
      items.reduce((accumulator, item) => accumulator + item.price, sum)
      return sum;
    },
    orderInfo(): Promise<string> {
      let itemString = '';
      items.map(item => {
        itemString += `${item.name} x ${item.quantity} ${item.price}` + '$ ';
      })
      return new Promise<string>(() => {
        `Your Order Number is ${this.orderNumber}. You have ordered: ${itemString} and your total is ${this.getTotalPrice()} ` + '$';
      })
    }
  })

  static prepareOrder(order: {
    paid: boolean;
    orderNumber: number;
    items: Product[];
    getTotalPrice(): number;
    orderInfo(): Promise<string>;
  }, timeout = 2000): Promise<string> {
    let timer;
    clearTimeout(timer)
    return new Promise<string>(() => {
      timer = setTimeout(async () => {
        const observable = new Observable();
        if (order.paid === false) {
          observable.unsubscribe(order);
          return 'Order Has not been paid it will be cancelled';
        } else {
          observable.subscribe(order);
          observable.notify(await order.orderInfo().then((res) => {
            console.log(res);
          }));
          observable.notify(this.prepareDrink());
          observable.notify(this.preparePotatoes());
          observable.notify(this.prepareSandwich());
          observable.unsubscribe(order);
          return `Order #${this.orderNumber} is Finished Preparing`;
        }
      }, timeout);
    })
  }
  static prepareDrink() {
    setTimeout(() => console.log("Your Drink has been Prepared !!!")
      , 3000)
  }

  static prepareSandwich() {
    setTimeout(() => console.log("Your Sandwich has been Prepared !!!")
      , 3000)
  }

  static preparePotatoes() {
    setTimeout(() => console.log("Your Potatoes has been Prepared !!!")
      , 3000)
  }
}
export default OrderManager



