// Generic in typescript allow you to create reusable components that work with a 
// variaty of data types while maintaing type safety 


function fruits<T>(name: T):T{
    return name;
}

let onlyStr = fruits('safkdj')
let onlyNum = fruits(45)
let onlyBOl = fruits(true)