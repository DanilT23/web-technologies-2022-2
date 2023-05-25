import Pizza from "../Pizza";
import SizeChecker from "../SizeChecker";

export default class Button{
    container = null;
    pizza;
    price = 0;
    calories = 0;
    constructor(containerClass ='.js-button-render') {
        this.container = document.querySelector(containerClass);
        //const pizza = new Pizza();
       // console.log(pizza);

        //this.render();
        //с 1 входом проблема
    }

    render(){
        //отобрать цену и калории из текстконтента
        const a = this.container.textContent;
        const b = a.replace(/[^0-9,\s]/g,"");
        const c = b.replace(/\s+/g, ' ').trim();
        const d = c.split(' ');
        this.price += Number(d[0]);
        if(d[1]) //для 0 входа чтоб не ломалось и NaN не писало
            this.calories += Number(d[1]);
        this.container.textContent = '';
        this.container.innerHTML = `Добавить в корзину за <br> ${this.price} Р (${this.calories} кКалл)`;
        //console.log(this.container);

    }
    add(pizza){
        this.pizza = pizza;
        this.price = this.pizza.price;
        this.calories = this.pizza.calories;
        //console.log(this.container);
        this.container.textContent = '';
        this.render();
    }
    addToppings(topping){
        this.price = topping.price;
        this.calories = topping.calories;
        console.log(this.price);
        //this.pizza.addTopping(this.topping);
        this.render();
    }
    checkSize(elem){
        if(elem == document.getElementById('tab-1')){
            this.price = -200;
            this.calories = -200;
            this.render();
        }
        if(elem == document.getElementById('tab-2')){
            this.price = 200;
            this.calories = 200;
            this.render();
        }
    }
}