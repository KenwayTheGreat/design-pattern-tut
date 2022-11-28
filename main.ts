import Drink from "./Classes/Drink"
import Sandwich from "./Classes/Sandwich"
import Observable from "./Classes/Observable"
import OrderManager from "./Classes/OrderManager"

const order1 = OrderManager.createOrder(
    [new Sandwich("Large", "Big Tasty", 2, 280), new Sandwich("Medium", "Big Mac", 1, 80), new Drink("Coke", 1, 25)])

const order2 = OrderManager.createOrder(
    [new Sandwich("Large", "Big Tasty", 1, 140), new Sandwich("Medium", "Big Mac", 1, 80), new Drink("Coke", 1, 25)])

const observable = new Observable();
observable.subscribe(order1);
observable.notify(order1.orderInfo());
observable.subscribe(order2);
observable.notify(order2.orderInfo());
observable.notify(`Order # ${order1.orderNumber} Drink has been prepared`);
observable.notify(`Order # ${order1.orderNumber} Sandwich has been prepared`);
observable.unsubscribe(order1);
observable.notify(`Order # ${order2.orderNumber} Drink has been prepared`);
observable.notify(`Order # ${order2.orderNumber} Sandwich has been prepared`);
observable.unsubscribe(order2);