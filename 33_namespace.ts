// // 

// class Auth { 
//     login(){
//         console.log('user login function ')
//     }
// }

// function  getList(){
//     console.log("List of users ")
// }


namespace UserNameSpace{
       export class Auth { 
        login(){
            console.log('user login function ')
        }
    }

   export function  getList(){
        console.log("List of users ")
    }

}



namespace AUTHNameSpace{
       export class Auth { 
        login(){
            console.log('user login function ')
        }
    }

 export   function  getList(){
        console.log("List of users ")
    }
    
}


let user0 = new UserNameSpace.Auth();
user0.login()


let user1= new AUTHNameSpace.Auth()
user1.login()
UserNameSpace.getList();
AUTHNameSpace.getList();