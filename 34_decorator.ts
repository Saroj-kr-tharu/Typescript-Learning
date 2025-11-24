// Decorator 
//  In typescript decorators are a special kind of declartion 
// that can be attached to classes , methods , properties, 
// parametes to modify their behavior 


function classLogger ( constructor:Function ){
    console.log(constructor.name)
}

function getKeyDetails(target:any, key:any){
    console.log(key);
    
}

@classLogger
class CustumMethods {

    @getKeyDetails
    value1: number;
    value2: number;
    constructor(x: number, y: number) { 
        this.value1 = x; 
        this.value2 = y ;
    }



}


var c2 = new CustumMethods(23, 33);
