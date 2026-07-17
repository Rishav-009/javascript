async function getuser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Error occured while fetching data");
        }
        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.log(error.message);
    }
    
}
getuser();