interface CollegeDataType{
    name:string;
    displayTeacher():void;
    getStudentList(): string[]
}

class CollegeData implements CollegeDataType {
    name:string; 

    constructor(cName:string ) {
        this.name = cName
    }

    displayTeacher() : void  {
        console.log("anil", "sam", "peter")
    }

    getStudentList(): string[] {
        return ['saroj', 'anush']
    }





}


var collge1= new CollegeData('IIT Delhi ');


collge1.displayTeacher()
console.log(collge1.getStudentList())