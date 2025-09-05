// promises


function getWeather(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> rejected("sunny"), 100 )

    })
}
    
function fulfilled(data){
    console.log(`today's weather is ${data}`)
}

function rejected(data){
    console.log(`"${data}" is the wrong value of weather `)
}

const weather = getWeather()
weather.then(fulfilled).catch(rejected)
