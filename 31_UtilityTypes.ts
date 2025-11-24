// // in typescript , Utility types are built in types that help transform 
// // or manipulate other types in a convenient way 

// interface CollegeType {
//     name: string, 
//     location: string, 
//     students: number, 
//     branch : number 
// }


// let collegeData : Partial <CollegeType> = {
//     name:    "string", 
//     location:"string", 
//     students:25,
// }


// function hello (data: Partial  <CollegeType> ) {

// }

// hello({name:'2df', branch: 2, l:23, students : 23 })



// function hello2 (data: Required  <CollegeType> ) {

// }

// hello({name:'2df', branch: 2, students : 23 })


// // lo({name:'2df', branch: 2, students : 23 })


// var collegeData2 : Readonly<CollegeType> = {
//     name:    "string", 
//     location:"string", 
//     students:25,
//     branch: 23
// }

// collegeData2.name = 'sjkdjf'



// var collegeDatae : Pick<CollegeType , 'name' |  'location'> = {
//     name:    "string", 
//     location:"string", 
   
// }

// collegeData2.name = 'sjkdjf'