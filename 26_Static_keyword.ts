// static keyword 
// use to define static property and methods 
// memory Efficiency 
// Utility Methods 
// Global Constants


class Company {
  static  name:string = 'Google'

  static getName(){
    return "Google"
  }

  
}

var c1 = new Company();
// console.log(c1.name)

console.log(Company.name)
console.log(Company.getName())