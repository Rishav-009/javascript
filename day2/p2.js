let btn = document.querySelector("#btn1");
// now replace getelmentbyid to querySelctor use # if id and . if class
btn.addEventListener("click",function(){
    let name = document.querySelector("#inputName").value;
    document.querySelector("#title").innerHTML="hello " + name + "good day " + "welcome back! ";
})