function getdata(callback){
    setTimeout(()=>{
        console.log("fetching info");
        callback("rishav");
    },2000)
}
function displaygreet(name){
    console.log(`welcome ${name}`);
}

getdata(displaygreet);

