// type => Define custum data type for object function etc

// the interface and type is same to define the structre of custum data type
// but in interface we extends two and in type we use interaction to combine 

type dataType =  {name: string, email:string} ; 
type dataTypeb =  {name: string, email:string} ; 
type c = dataType | dataTypeb;

interface a {name:string}
interface b {email:string}

interface dataT   extends a,b {data: number } ; 


var empData1 : dataType = {
    name: 'saroj',
    email: 's@gmail.com'
}

var stuDeat1 : dataType = {
    name: 'saroj',
    email: 's@gmail.com'
}
