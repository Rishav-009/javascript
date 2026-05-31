function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("rishav")
        },2000)
    })
}

async function greet(){
    let name = await getData();
    console.log("hello"+ " " +  name);
}
greet();
console.log("the first thing we are goint say is.........");