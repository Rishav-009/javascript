function login(Number){
    let password =1234
    return new Promise((success, failure)=>{
        if(password == Number){
            success("login success")
        }
        else{
            failure("login failed")
        }
    })

}
login(1234)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })
        
    