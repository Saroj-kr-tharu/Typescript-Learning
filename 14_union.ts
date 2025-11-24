

var studentData:string | number  = 'Anil';

studentData = 20 ; 


function fruitDAta ():string | Array<string>  {
     var item = 1;
     if(item > 1) 
        return ['apple', 'banana']
    return 'grapes'
}

function student (name:string | number | boolean){

}

student('saroj')
student(true)
student(23)