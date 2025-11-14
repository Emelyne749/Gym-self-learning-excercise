const getTodos = ((callback)=>{

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readystate) There are total of 4 states
        if(request.readyState === 4 && request.status=== 200 ){ //If done as the 4th state is done and its contains the data
            callback(undefined, request.responseText)// Display the JSON data to the console
        }
        else{
            callback("Fetch not found", undefined)
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()


})

getTodos((error, data)=>{
    console.log("Callback fired")
    console.log(data, error)
})