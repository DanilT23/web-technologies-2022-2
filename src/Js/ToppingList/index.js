import Button from "../Button";
import PizzaList from "../PizzaList";
import SizeChecker from "../SizeChecker";

export default class ToppingList{
    list = [];
    container = null;
    button = null;
    constructor(containerClass = '.js-toppings-render') {
        this.container = document.querySelector(containerClass);
        this.container?.addEventListener('click',this.eventHandler.bind(this));
        this.button = new Button();
    }

    addToToppingList(topping){
        this.list.push(topping);
        return this;
    }

    render(){
        this.container.textContent = '';
        //console.log(this.container);
        this.list.forEach((topping)=>{
            this.container.appendChild(topping.render());
        });
    }

    eventHandler(event){
        const cardElem = event.target.closest('.pizza-topping-card');
        //console.log(cardElem);
        if(cardElem){
            const topping = this.list.find(item => item.id === +cardElem.dataset.id);
            //console.log(topping);
            this.button.addToppings(topping);
            //return(topping);
        }
        //console.log(event.target.classList.contains('pizza-card'));
    }
}