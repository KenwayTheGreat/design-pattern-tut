import MenuItem from "./MenuItem";

class Meal extends MenuItem {
    items: MenuItem[];
    constructor(name: string, quantity: number, price: number) {
        super(name, quantity, price);
    }
}
export default Meal;