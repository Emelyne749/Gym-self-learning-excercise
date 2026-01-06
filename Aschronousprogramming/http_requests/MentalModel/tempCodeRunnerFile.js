// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

let getData = (source)=>{
    let controller = new AbortController()
    let signal = controller.signal
    fetch(source,{signal}).then(result => result.json()).then((ans)=>console.log(ans)).catch