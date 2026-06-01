let student = {
    name: "rishav",
    roll : 218
};

let data = JSON.stringify(student);
console.log(data);

let obj = JSON.parse(data);
console.log(obj);