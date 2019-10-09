

let log = (msg) =>{

    return new Promise((resolve,reject) =>{

        console.log(msg);

        resolve(msg);
    })

}

log("First").then(result =>{
    return log("Second")
}).then(result =>{
    return log("Third")
    
}).then(result =>{
    return log("Fourth")
});





