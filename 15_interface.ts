// an interface is a way to define the structure of an object, function 

interface info {
    name : string , 
    age: number , 
    college: string 
}

interface teacherinfo extends info {
    subject: string, 
    salary: number
}

interface mangementifo extends teacherinfo , info {
    team: string
}

var studentObj: info  = {
    name: 'Saroj Kumar Tharu',
    age: 30,
    college : 'ilets '
}

var teacher:teacherinfo = {
    name: 'sam',
    age:40,
    college: 'djfkdjf',
    subject : 'math',
    salary:2334
}


var management:mangementifo =  {
    name: 'sam',
    age:40,
    college: 'djfkdjf',
    subject : 'math',
    salary:2334, 
    team : 'hr'
}


console.log(management, teacher, studentObj)