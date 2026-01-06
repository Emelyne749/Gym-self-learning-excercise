// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

let numbers = (number) => {
    let n = setInterval(() => {
                console.log(number)
                
            }, 2000);
    setTimeout(()=>{
        clearInterval(n)
    },5000)
}


numbers(43)