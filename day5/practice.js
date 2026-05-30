let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let n = document.querySelector("#name").value;
    let d = document.querySelector("#dept").value;
    let r = document.querySelector("#roll").value;
    if(n === "" || d === "" || r === ""){
        alert("empty elements");
    }

    let li = document.createElement("li");

    li.innerText=`We Welcome Dear ${n} of ${d} and ${r} on board!`;

    document.querySelector("#list").append(li);

    document.querySelector("#name").value="";
    document.querySelector("#dept").value="";
    document.querySelector("#roll").value="";

})