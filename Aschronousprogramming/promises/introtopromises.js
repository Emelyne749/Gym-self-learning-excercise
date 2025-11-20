const getTodos = ( resource =>{

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status=== 200 ){ 
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
        else if(request.readyState === 4){
            reject("Fetch not found")
        }
    })

    request.open('GET', resource)
    request.send()
    })
})   
    
getTodos('/Aschronousprogramming/http_requests/elliot.json').then((data)=>{
    console.log("The 1st output is :", data)
    return getTodos('/Aschronousprogramming/http_requests/mario.json')
}).then((data) =>{
    console.log("The 2nd out put is :",data)
    return getTodos('/Aschronousprogramming/http_requests/harry.json')
}).then((data)=>console.log("The 3rd output is :", data)).catch((error)=>console.log("The output is :", error))

