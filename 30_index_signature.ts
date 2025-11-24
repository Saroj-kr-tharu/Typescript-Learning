// index signarature in Typescript 

// An index signature in Typescript allows you to define objects with dynamic keys 
// while specifying the type of their values 



 type useDAtaType = {
    name:string,
    mobile:number,
    [key:string]: number | string
}


let useDAta: useDAtaType = {
    name:'234',
   mobile:999,
   id:10,
   marks:20,
   age:20,
   semster:23

}