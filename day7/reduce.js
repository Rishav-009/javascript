let arr = [1,2,4,5];

const sum = arr.reduce((acc,curr)=>{
    return acc + curr;
},10)
console.log(sum);