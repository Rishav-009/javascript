function login(username , password){
    return new Promise((resolve,reject)=>{
        if(username == "rishav" && password == 4475){
            resolve(`Welcome Mr ${username}`);
        }
        else{
            reject("Please enter valid credentials");
        }
    })
}
async function greet (){
    let username = "rishav";
    let password = 4475
    let msg = await login(username,password);
    console.log(msg);
}
greet();