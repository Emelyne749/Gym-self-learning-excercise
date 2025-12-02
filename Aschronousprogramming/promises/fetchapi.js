const getTodos = async () =>{
    const response = await fetch('elliot.json')
    const data = await response.json()
    
    return data

}

getTodos()
.then(resp => console.log('resolved',resp))



// fetch('elliot.json').then((response)=>{
//     console.log('resolved', response)
//     return response.json()//This will return a promise
// }).then(data=>console.log(data)).catch((err)=>{
//     console.log('rejected', err)
// })