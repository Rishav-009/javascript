async function getUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // const ans = data.forEach((num)=>{
    //     console.log(num.email);
    // })
    // const ans2 = data.filter((num)=>{
    //     return num.id>=4;
    // })
    // console.log(ans2);
    const ans3 = data.map((num)=>{
        return num.id*2;
    })
    console.log(ans3);

}


getUser();