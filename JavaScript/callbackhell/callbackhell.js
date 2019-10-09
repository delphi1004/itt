

function log(msg, func){

    console.log(msg);

    func(msg);
}

log("first" , msg =>{
    log("second" , msg=>{
        log("Third" , msg=>{
            log("Fourth" , msg=>{
            })
        })
    })
})


