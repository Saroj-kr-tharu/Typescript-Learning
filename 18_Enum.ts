// a datatype thats allow you to define a set of named constants

enum whoTypes  {
    student = "students",
    teacher = "teacher",
    management = "management",
    labStaff = "labStaff",
}

var who:whoTypes = whoTypes.student;


enum Roles { 
    admin="ADMIN", 
    custumer="CUSTUMER", 
    management="MANAGEMENT"
}

var userRole = Roles.admin;
console.log(userRole)