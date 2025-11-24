

// The data types 


// primitive data types 
    // inbuilt in typescript 
    // number , string, boolean , bigint  , null, undefined , bigint, symbol 

    var num: number = 10 
    var num1: number = 10.23434
    console.log(num, num1)

    var data2:null= null;
    console.log(data2)

    var data3:undefined = undefined;


// object types
    //  Array
    var num3 : number[] = [12,34,52]
    var num4 : Array<number> = [12,34,52]

    var str1 : string[] = ["Saroj", "eliza "]
    var str2 : Array<string> = ["Saroj", "eliza "]

    console.log(num3, num4, str1, str2)
    
    // Tuple
    let person2 : [string, number, string , Array<string> ] = ["saroj", 23, 'saroj', str2]
    console.log("persone :- ", person2)
    
    
    // Object 
    // a key-value pair collection 
    
    let user: {name: string, age: number } = {name: 'SAroj', age: 23}
    console.log("user :- ", user)

// special types 
    // any
    let x: any = "saroj "
    x=23

    // unknown 
    // similar to any but requires type checking before use . 
    let input2:unknown = "hello"
    if(typeof input2 === "string"){
        console.log(input2.toUpperCase)
    }

    // void 

    // used for functions that do not return a value 
    function logMessage():void {
        console.log("this function jsut to log")
    }
    logMessage();

    // never 
    // used for functions that never return (e.g. Throwing errors or infinite loops )
    function throwError(): never { 
        throw new Error("Something went wrong ")
        
    }






// Advanced types 
    // union Types 
    let value: string | number ;
    value="saroj"
    value=234

    // intersection 
    type Employee = {name: string}
    type Manager = {department: string}
    type TeamLead = Employee & Manager

    let lead = {name: 'SAroj', department: "it"}

    // Type Alias 
    type ID = string | number 
    let userId: ID = "user234"
    let id: ID = 23434 


    // Enums 
    // defines names constant 
    enum Roledefine { 
        Admin, 
        User, 
        Guest
    }
    let userRole : Roledefine = Roledefine.Admin

    // Literal Types 
    // restricts a value to a specific set 

        let direction : "up" | "down"; 
        direction = "up"
        direction = "down"

// function types 
    // Defines the type of function 
    let add: (x: number , y:number ) =>  number ;

