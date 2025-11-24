// Typeguard in typescript 

// A type Guard in Typescript is a technique used to narrow down the type of a variable within a conditional block 

let UserData20: Number | string | boolean = 30

UserData20 = true;

if(typeof UserData20 == 'boolean') {
    console.log('this is a bool data type')
}

if(typeof UserData20 == 'string') {
    console.log('string datatype')
}


if(typeof UserData20 == 'number') {
    console.log('this is a number data type ')
}
