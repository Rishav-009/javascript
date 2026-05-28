let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let inp = document.querySelector("#input").value;
    
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.innerText= "delete";
    li.innerText= inp;
    li.style.color="red";
    

    let done = document.createElement("button");
    done.innerText = "Completed";

    

    let divv = document.createElement("div");
    divv.style.display ="flex";
    divv.style.gap= "10px";
    divv.append(li,del,done);

    

    del.addEventListener("click",function(){
        divv.remove();
     })

    done.addEventListener("click",function(){
        //li.innerText.style.color="green";
        if(done.innerText=="Completed"){
            done.innerText="DONE";
            done.style.color = "green";
            li.style.color = "green";
            li.style.textDecoration = "line-through";
        }
        else{
            done.innerText="Completed";
            li.style.textDecoration="none";
             done.style.color = "red";
            li.style.color = "red";

        }
        
    })
    document.querySelector("#container").append(divv);

    document.querySelector("#input").value=" ";
    
})