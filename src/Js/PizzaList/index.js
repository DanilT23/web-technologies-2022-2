import Button from "../Button";
import SizeChecker from "../SizeChecker";
export default class PizzaList{
    list = [];
    container = null;
    button = null;
    constructor(containerClass = '.js-pizza-catalog') {
        this.container = document.querySelector(containerClass);
        this.container?.addEventListener('click',this.eventHandler.bind(this));
        this.button = new Button();
    }

    addToPizzaList(pizza){
        this.list.push(pizza);
        return this;
    }

    render(){
        this.container.textContent = '';

        this.list.forEach((pizza)=>{
            this.container.appendChild(pizza.render());
        });
    }

    eventHandler(event){
       const cardElem = event.target.closest('.pizza-card');
       //console.log(cardElem);
        if(cardElem){
            const pizza = this.list.find(item => item.id === +cardElem.dataset.id);
           // console.log(pizza);
            this.button.add(pizza);
        }
        //console.log(event.target.classList.contains('pizza-card'));
    }
}