let btn = document.querySelector("#btn");
function addTask(){
        let inp = document.querySelector("#input").value;
        if(inp.trim()==""){
            alert("Please Enter Task To Be Added");
            return;
        }
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
    }
btn.addEventListener("click",function(){
    addTask();
})
let input = document.querySelector("#input");
input.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        addTask();
    }
})
