let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let inp = document.querySelector("#task").value;

    let li = document.createElement("li");

    // let div = document.createElement("div");

    li.innerText= inp;

    // div.append(li);

    document.querySelector("#list").append(li);
    document.querySelector("#task").value="";
})