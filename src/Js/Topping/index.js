export default class Topping {
    id;
    img='';
    name='';
    price = 0;
    calories = 0;
    constructor(id,name,img,price,calories){
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
    render(){
        const elem = document.createElement('div');
        elem.classList.add('pizza-topping-card');
        elem.dataset.id = this.id;
        //data-id чтоб не ломалось т.к. на изобржаение тыкаешь оно выводило без айди
        elem.innerHTML = `
                <div class = "pizza-topping-card__img">
                    <img src="${this.img}" alt="${this.name}">
                </div>
                <span class="pizza-topping-card__title">${this.name}</span>
                <span class="pizza-topping-card__price">${this.price} Р</span>
        `;
        return elem;
    }
}