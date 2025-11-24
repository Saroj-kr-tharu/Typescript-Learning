
// any Data types 

// which allows a variable to hold values of any type 
// if you are not sure about data type of variable you
// can use any 



var value : any ='anil'
value = true
value = [3, 4, 'saroj ']

console.log(value)

// Unknown Data types 
// the unknown type in typescript is similar to any, 
// but it's safer because it forces type checking before 
// performing operations on the value 

var value1:unknown = "anil"

value1= 100; 

value1 = ['anil']
if(value1 == Array<string>){
    console.log(value1)
}
value1 = true 
if( typeof value1 == 'boolean'){
    console.log(value1)
}


console.log(value1)
