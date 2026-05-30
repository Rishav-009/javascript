let student = {
    name : "rishav",
    roll : 2218,
    dept :"DCET"
};

let arr = [
    {
        name:"Arsh",
        roll : 24,
        dept :"tmp"
    },
    {
        name : "rishav",
        roll : 2218,
        dept :"DCET"
    },
    {
        name : "Vansh",
        roll:23,
        dept:"tmp"
    }

];

let brr = [23,"rishav" , "vansh" , "arsh", "navu","shalu"];

// NOW WILL PRACTICE ON FOR EACH
brr.forEach(function(num){
    console.log(num);
})

arr.forEach(function(num){
    console.log(num.name);
})

// now practice on MAP 

let zrr = [1,2,3,4,5];

let doubled=zrr.map(function(i){
    return i*2;
})
console.log(doubled);

// now practice on filter

let crr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let even = crr.filter((i)=>{
    return i%2==0;
})
console.log(even);

// now using map get only names in arr
let namesOnly = arr.map((i)=>{
    return i.name;
})
console.log(namesOnly);

// now get students will onyl  dept== tmp

let tmpDept= arr.filter((i)=>{
    return i.dept=="tmp";
})
console.log(tmpDept);