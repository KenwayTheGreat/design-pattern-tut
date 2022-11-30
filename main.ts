import Drink from "./Classes/Drink"
import Sandwich from "./Classes/Sandwich"
import OrderManager from "./Classes/OrderManager"
import Meal from "./Classes/Meal"
import Potato from "./Classes/Potatoes"


const order1 = OrderManager.createOrder(
    [new Sandwich("Large", "Big Tasty", 2, 280), new Sandwich("Medium", "Big Mac", 1, 80), new Drink("Coke", 1, 25)], false)

const order2 = OrderManager.createOrder(
    [new Meal("Happy Meal", 2, 2.7, [new Sandwich("Medium", "Big Mac", 1, 1), new Potato("Fri", "Mc Fries", 1, 1), new Drink("Coke", 1, 0.7)]),], true)

const order3 = OrderManager.createOrder(
    [new Meal("Happy Bundle", 2, 5, [new Meal("Happy Meal", 2, 2.5, [new Sandwich("Medium", "Big Mac", 1, 1), new Potato("Fri", "Mc Fries", 1, 1), new Drink("Coke", 1, 0.5)])])], true)

const ordArr = [order1, order2, order3];

let orderManager;

ordArr.forEach(ord => {
    orderManager = OrderManager.prepareOrder(ord).then((res) => {
        console.log(res);
    }).catch(() => {
        console.log('Order has been cancelled');
    });
});



