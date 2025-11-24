class Auth{
        login(name:string, password: string){
        return `studnet ${name} is logged in `
     }
}

class Student extends Auth  {

    result (marks: number){
        if(marks > 33 ){
            return 'pass'
        }
        return 'faile'
    }



}


var s1 = new Student();
console.log(s1.result(230) ) 


class Teacher  extends Auth {


    subject (sub:string){
        return ` Subject => ${sub} `
    }


}


const t1 = new Teacher();
console.log(t1.subject('science'))