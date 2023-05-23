class Size{
    constructor(name,price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
const bigSize = new Size('big',200,200);
const smallSize = new Size('small',100,100);
class Topping{
    constructor(name,price,calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
const mozzarella = new Topping('mozzarella',50,20);
const cheeseBoard = new Topping('cheese board',150,50);
const parmezan = new Topping('cheder and parmezan',150,50);
class TypePizza{
    constructor(name,price,calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
const margarita = new TypePizza('margarita',500,300);
const pepperoni = new TypePizza('pepperoni',800,400);
const bavarian = new TypePizza('bavarian',700,450);

class Pizza{
    price = 0;
    calories = 0;
    topping = [];
    type = null;
    size = null;
    constructor(type,size){
        this.type = type;
        this.calculatePlus(type);
        this.size = size;
        this.calculatePlus(size);
    }
    addTopping(topping){
        this.calculatePlus(topping);
        this.topping.push(topping);
    }
    removeTopping(topping){
        if(this.topping.includes(topping))
        {
            const a = this.topping.indexOf(topping);
            this.calculateMinus(topping);
            this.topping.splice(a, 1);
        }
        //delete this.topping[topping];
    }
    getToppings(){
        return this.topping;
    }
    calculatePlus(a){
        this.price += a.price;
        this.calories += a.calories;
    }
    calculateMinus(a){
        this.price -= a.price;
        this.calories -= a.calories;
    }
    getSize(){
        return this.size;
    }
    getStuffing(){
        return this.type;
    }
    calculatePrice(){
        return this.price;
    }
    calculateCalories(){
        return this.calories;
    }
}
const pizzaPepperoni = new Pizza(pepperoni,smallSize);
pizzaPepperoni.addTopping(parmezan);
pizzaPepperoni.addTopping(mozzarella);
console.log(pizzaPepperoni.getSize());
console.log(pizzaPepperoni.getStuffing());
console.log(pizzaPepperoni.calculateCalories());
console.log(pizzaPepperoni.calculatePrice());
console.log(pizzaPepperoni.getToppings());
pizzaPepperoni.removeTopping(parmezan);
console.log(pizzaPepperoni.getToppings());