const getTodos = async () =>{
    const response = await fetch('elliots.json')
    if(response.status != 200){
        throw new Error('Can not fetch the data')
    }

    const data = await response.json()
    
    return data

}

getTodos()
.then(resp => console.log('resolved',resp))
.catch(err=> console.log('rejected',err.message))



// fetch('elliot.json').then((response)=>{
//     console.log('resolved', response)
//     return response.json()//This will return a promise
// }).then(data=>console.log(data)).catch((err)=>{
//     console.log('rejected', err)
// })