const getTodos = ((callback)=>{

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readystate) There are total of 4 states
        if(request.readyState === 4 && request.status=== 200 ){ //If done as the 4th state is done and its contains the data
            const data = JSON.parse(request.responseText)
            callback(undefined, data)// Display the JSON data to the console
        }
        else if(request.readyState === 4){
            callback("Fetch not found", undefined)
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()


})

console.log(1)
console.log(2)

getTodos((error, data)=>{
    console.log("Callback fired")
    if(error){
        console.log("Couldn't fetch data")
    }
    else{
        console.log(data)
    }
})


console.log(3)
console.log(4)