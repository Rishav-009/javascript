let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let inp = document.querySelector("#task").value;
    let p = document.createElement("p");
    p.innerText=inp;
    document.querySelector("#container").append(p);

})
// using settimeout
// btn.addEventListener("click",function(){
//     setTimeout(function(){
//         let inp = document.querySelector("#task").value;
//         let p = document.createElement("p");
//         p.innerText=inp;
//         document.querySelector("#container").append(p);
//     },3000)
// })