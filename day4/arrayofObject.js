let students=[
    {
        name:"rishav",
        dept :"dcet"
    },
    {
        name:"nav",
        dept:"dcet"
    },
    {
        name:"luckyy",
        dept:"god-level"
    }
];
// console.log(students);
// console.log(students[0]);
// console.log(students[1].name);

students[2].dept = "legend";

// console.log(students[2]);
//pushing new entry



students.push(
    {
        name:"madhav",
        dept:"top"
    });
// console.log(students);

for(let i =0; i < students.length; i++){
    console.log(students[i].name);
}