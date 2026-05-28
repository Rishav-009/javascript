let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let inp = document.querySelector("#input").value;
    
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.innerText= "delete";
    li.innerText= inp;

    let divv = document.createElement("div");
    divv.style.display ="flex";
    divv.style.gap= "10px";
    divv.append(li,del);

    del.addEventListener("click",function(){
        divv.remove();
     })
    document.querySelector("#container").append(divv);

    document.querySelector("#input").value=" ";
})