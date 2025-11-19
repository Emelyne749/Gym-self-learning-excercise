const getTodos = ((resource, callback)=>{

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readystate) There are total of 4 states
        if(request.readyState === 4 && request.status=== 200 ){ //If done as the 4th state is done and its contains the data
            const datas = JSON.parse(request.responseText)
            callback(undefined, datas)// Display the JSON data to the console
        }
        else if(request.readyState === 4){
            callback("Fetch not found", undefined)
        }
    })

    request.open('GET', resource)
    request.send()


})

console.log(1)
console.log(2)

getTodos('elliot.json',(data)=>{
    console.log(data)
    getTodos('mario.json',(data)=>{
        console.log(data)
        getTodos('harry.json',(data)=>{
        console.log(data)
        })
    })
})


console.log(3)
console.log(4)