let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let inp= document.querySelector("#task").value;
    let t = document.createElement("input");
    t.type="checkbox";
    
    let p = document.createElement("p");
    p.innerText=inp;
    let del = document.createElement("button");
    del.innerText= "Delete";
    del.addEventListener("click",function(){
        taskDiv.remove();
    })
    let taskDiv = document.createElement("div");
    taskDiv.style.display = "flex";
    taskDiv.style.gap = "10px";
    taskDiv.append(t, p, del);
    
    document.querySelector("#container").append(taskDiv);

})

