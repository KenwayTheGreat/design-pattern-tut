import MenuItem from "./MenuItem"


class OrderManager {
  static orderNumber: number = 0;
  items: MenuItem[];

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  static createOrder = (items) => ({
    orderNumber: this.orderNumber++,
    items,
    getTotalPrice(): number {
      let sum = 0;
      items.forEach(item => {
        sum += item.price
      })
      return sum;
    },
    orderInfo(): string {
      let itemString = '';
      items.map(item => {
        itemString += `${item.name} x ${item.quantity} ${item.price} ` + '$ ';
      })
      return `Your Order Number is ${this.orderNumber}. You have ordered: ${itemString} and your total is ${this.getTotalPrice()} ` + '$';
    }
  });

  prepareDrink() {

  }

  prepareSandwich() {

  }

  preparePotatoes() {

  }
}
export default OrderManager



