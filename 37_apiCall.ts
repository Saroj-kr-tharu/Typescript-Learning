
type APITypes = { 
     userId: number, id: number, title: string, completed: boolean 

}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

async function  apiCallHanding():Promise<APITypes>{
    const result = await fetch(url);
    const data = await result.json()
    return data 
    
}


 apiCallHanding().then((data)=> {console.log(data);
}) 