class Product {
    name:string;
    price:number;
    pid:string;
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

var products = new Product('samsung', 10000, '101');
console.log(products.addToCart())
// console.log(products.buyProduct())
console.log(products.buyProduct())