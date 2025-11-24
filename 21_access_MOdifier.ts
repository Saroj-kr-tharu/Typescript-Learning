// access modifier 
// private => only on class 
// protected => class + child class 
// public => all over the project 


class Product {
    name:string;
    protected price:number;
    private pid:string;
    inCart:boolean= false;
    isOrdered: boolean = false;

    constructor(name:string, price:number, pid:string){
        this.name = name;
         this.price = price;
        this.pid = pid ;
    }

    addToCart(): void {
        this.inCart= true;
    }

    buyProduct(): string  {
        
        if(this.inCart){
            return ` name: ${this.name} price: ${this.price} pid: ${this.pid} `
        }
        return  `no product in cart`


    }

}

class Order extends Product {
    constructor(){
        super('iphone', 233, '3jdkfj')
    }


}

var products = new Product('samsung', 10000, '101');
console.log(products.addToCart())
// console.log(products.price)
console.log(products.buyProduct())