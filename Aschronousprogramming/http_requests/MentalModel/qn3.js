// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. You should log to the console “Retrying….” when retrying the request.



let getData = (source)=>{
    let controller = new AbortController()
    let signal = controller.signal
    fetch(source,{signal}).then(result => result.json()).then((ans)=>console.log(ans)).catch(err=>console.log('Abort error detected'))
    setTimeout(()=>{
        controller.abort()
    },10)

}


getData('https://jsonplaceholder.typicode.com/posts/1')