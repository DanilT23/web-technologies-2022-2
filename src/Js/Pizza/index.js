export default class Pizza {
    id;
    price = 0;
    calories = 0;
    topping = [];
    type = null;
    size = null;

    title ='';
    img='';
    constructor(id,title,img,type,size){
        this.id = id;
        this.title = title;
        this.img = img;
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

    render(){
        const elem = document.createElement('div');
        elem.classList.add('pizza-card');
        elem.dataset.id = this.id;
        //data-id чтоб не ломалось т.к. на изобржаение тыкаешь оно выводило без айди
        elem.innerHTML = `
            <div class="pizza-card" data-id="${elem.dataset.id}">
                <div class="pizza-card__img">
                    <img src="${this.img}" alt="${this.title}">
                </div>
                <h5 class="pizza-card__title">${this.title}</h5>
            </div>
        `;
        return elem;
    }
}