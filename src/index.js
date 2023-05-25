import Pizza from "./Js/Pizza";
import Size from "./Js/Size";
import Topping from "./Js/Topping";
import TypePizza from "./Js/TypePizza";
import PizzaList from "./Js/PizzaList";
import ToppingList from "./Js/ToppingList";
import Button from "./Js/Button";
import SizeChecker from "./Js/SizeChecker";


//Size
const bigSize = new Size('big',200,200);
const smallSize = new Size('small',100,100);
//Topping
const mozzarella = new Topping(0,'Сливочная моцарелла','./src/assets/img/mozarella.png',99,100);
const cheeseBoard = new Topping(1,'Сырный бортик','./src/assets/img/cheeseBortik.png',189,50);
const parmezan = new Topping(2,'Чедер и пармезан','./src/assets/img/chedderAndParmzn.png',99,150,);
//TypePizza
const margarita = new TypePizza('margarita',500,300);
const pepperoni = new TypePizza('pepperoni',800,400);
const bavarian = new TypePizza('bavarian',700,450);
//Pizza
const pizzaPepperoni = new Pizza(0,'Пицца пепперони','./src/assets/img/pepperoni.png',pepperoni ,smallSize);
const pizzaMargarita = new Pizza(1,'Пицца Маргарита','./src/assets/img/margarita.png',margarita,smallSize);
const pizzaBavarian = new Pizza(2,'Пицца баварская','./src/assets/img/bavarian.png',bavarian,smallSize);

const pizzaList = new PizzaList();
//const button = new Button();
pizzaList.addToPizzaList(pizzaPepperoni);
pizzaList.addToPizzaList(pizzaMargarita);
pizzaList.addToPizzaList(pizzaBavarian);

const toppingList = new ToppingList();

toppingList.addToToppingList(cheeseBoard);
toppingList.addToToppingList(mozzarella);
toppingList.addToToppingList(parmezan);
toppingList.render();
pizzaList.render();

const sizeChecker = new SizeChecker();

//pizzaPepperoni.addTopping(parmezan);
//pizzaPepperoni.addTopping(mozzarella);
//console.log(pizzaPepperoni);
//console.log(pizzaPepperoni.getSize());
//console.log(pizzaPepperoni.getStuffing());
//console.log(pizzaPepperoni.calculateCalories());
//console.log(pizzaPepperoni.calculatePrice());
//console.log(pizzaPepperoni.getToppings());
//pizzaPepperoni.removeTopping(parmezan);
//console.log(pizzaPepperoni.getToppings());