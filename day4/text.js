let btn = document.querySelector("#btn");
let arr = [];

btn.addEventListener("click", function () {

    let x = document.querySelector("#task").value;

    arr.push(x);

    let p = document.createElement("p");
    p.innerText = x;

    document.querySelector("#container").append(p);

    document.querySelector("#task").value = "";
    
});