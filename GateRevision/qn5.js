function fetchData() {
    return new Promise((resolve, reject)=>{
        let bool = false
        const data = "Data fetched successfully!";
        setTimeout(() => {
            if(data&&bool){
                resolve(data);
            }else{
                reject("Not found")
            }
            
            
        }, 1000);
    })
}
  
fetchData().then(dat => console.log("data is found",dat)).catch(err=>console.log("Error:",err))