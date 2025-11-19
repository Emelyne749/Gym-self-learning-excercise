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
    
getTodos('mario.json').then((data)=>console.log("The output is :", data)).catch((error)=>console.log("The output is :", error))

