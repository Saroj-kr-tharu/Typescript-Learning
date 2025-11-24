// // function test1(){
// //     setTimeout(() => {
        
// //         console.log('test 1')
// //     }, 2);
// // }

// // function test2(){
// //     console.log('test 2')
// // }

// // test1()
// // test2()


// function complexLogic(): Promise<string> {
//    return new Promise <string> (
//         (resolved) => {
//             setTimeout(() => {
//                 resolved("result is here ")
//             }, 2);
//         }
//     )
// }


// complexLogic().then((data) => {
//     console.log(data);
    
//     test2()
// })
// function test2(){
//     console.log("test2")
// }



type resultType  = { 
    name:string, 
    id:number, 
    email:string
}


function complexLogic(): Promise<resultType> {
   return new Promise <resultType> (
        (resolved) => {
            setTimeout(() => {
                resolved({name: 'ssaroj', id:23, email:'djfkdjf'})
            }, 2);
        }
    )
}





complexLogic().then((data:resultType) => {
    console.log(data);
    
    test2()
})
function test2(){
    console.log("test2")
}

