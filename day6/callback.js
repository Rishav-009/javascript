function login(callback){
    setTimeout(()=>{
        console.log("login successfull");
        callback();
    },0)
}
function displayDashoard(){
    console.log("welcome sir , good morning!");
}

login(displayDashoard);

console.log("drinking coffee");