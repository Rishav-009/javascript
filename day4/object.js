let rishav={
    college:"guru nanak dev university",
    address:"punjab",
    department:"DCET",
    subjects : ["java","asp.net","system design"]
};
console.log(rishav);
console.log(rishav.college);
rishav.college = "GNDU AMRITSAR";
console.log(rishav.college);
rishav.rollnumber = "17032302218";
console.log(rishav);
//TO DELETE DIRECTLY USE DELETE
delete rishav.rollnumber;

console.log(rishav);
//to print first subject 
console.log(rishav.subjects[0]);

//pushing new thing in array
rishav.subjects.push("Cpp");
console.log(rishav.subjects);

//modifying the values
rishav.address="Mukerian,Punjab";
delete rishav.college;

console.log(rishav);

let product = {
    name: "Laptop",
    price: 50000,
    inStock: true
};

console.log(product.inStock);
