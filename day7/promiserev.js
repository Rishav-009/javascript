function greet(cases){
    return new Promise((resolve, reject)=>{
        if(cases=="pass"){
            resolve("the code was accepted");
        }
        else{
            reject("the code was not accepted");
        }

    })
}

greet("fail")
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })