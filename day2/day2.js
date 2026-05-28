// age checker

// let x = Number(prompt("Enter your age"));

// if(x >= 0 && x <= 3){
//     console.log("The individual is infant");
// }
// else if(x >= 4 && x <= 9){
//     console.log("The individual is toddler");
// }
// else if(x >= 10 && x <= 12){
//     console.log("The individual is a child");
// }
// else if(x >= 13 && x <= 19){
//     console.log("The individual is teen");
// }
// else{
//     console.log("ADULT");
// }


// NOW CALCULATOR
// let x = Number(prompt("enter 1st number"))
// let op = prompt("enter operation you want to perform")
// let y = Number (prompt("enter 2nd number"))

// if(op=="/" && (x==0 || y==0)){
//     console.log("not possible")
// }
// else if(op == "+"){
//    console.log(x+y); 
// }
// else if(op == "/"){
//     console.log(x/y);
// }


// print 0 to 20 event numbers
// for(let i = 0 ; i<=20 ; i+=2){
//     console.log(i);
// }

// find factorial 
// let x = Number(prompt("enter number to find factorial"))
// let fact=1
// while(x>0){
//     fact*= x
//     x--
// }
// console.log(fact);


//ARRAY
let arr = []
//creating a array
while(arr.length <8){
    let x = Number(prompt("enter the value"));
    arr.push(x);
}
console.log(arr);