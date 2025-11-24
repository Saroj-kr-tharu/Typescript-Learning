// intersection 
// intersection allows you to combine types into one 

// type 
type personTA = {name:string}
type personTB = {age:number}
type personTC = personTA & personTB // & => intersection data between two

// interface
interface personTIA  {name:string}
interface personTIB  {age:number}
type personTIC =  personTA & personTB // & => intersection data between two

// var PersonData : personTA = { name: 'Anil' }
// var PersonDataB : personTB = { age: 40 }
// var PersonDataC : personTC = { age: 40, name:'ssaroj'  }

var PersonData :  personTIA = { name: 'Anil' }
var PersonDataB : personTIB = { age: 40 }
var PersonDataC : personTIC = { age: 40, name:'ssaroj'  }

console.log(PersonData, PersonDataB, PersonDataC)
