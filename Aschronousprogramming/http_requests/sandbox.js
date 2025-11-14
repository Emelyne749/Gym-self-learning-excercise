const request = new XMLHttpRequest()

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readystate) There are total of 4 states
    if(request.readyState === 4 && request.status === 400){ //If done as the 4th state is done and its contains the data
        console.log(request.responseText)// Display the JSON data to the console
    }
    else{
        
        console.log("fetching error, data not found")

    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()