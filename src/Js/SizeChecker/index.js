import Button from "../Button";

export default class SizeChecker{
    container;
    button;
    elemCheck = document.getElementById('tab-1');
    constructor(containerClass = '.js-size-checker') {
        this.container = document.querySelector(containerClass);
        //console.log(this.container);
        //console.log(document.getElementById('tab-1'));
        //console.log(document.querySelector(".pizza-size"));
        this.container?.addEventListener('click',this.eventHandler.bind(this));
        this.button = new Button();
    }
    eventHandler(event){
        const cardElem = event.target.closest('.pizza-size__title-checker');
        if(cardElem){
            //console.log("yes");
            if(cardElem != this.elemCheck)
                this.button.checkSize(cardElem);
            this.elemCheck = cardElem;
        }
    }
}