const student = {
    name: "Mamun",
    age: 22,
    address: "Dhaka"
};

// Old Type
console.log(student)
console.log(student.name)

// New Type
const {name,age,address} = student;
console.log(age);

// nested & name alias
const student1 ={
    name:"Sakib",
    age: 24,
    address : {
        city : "CTG",
        zip: 2020
    },
};

console.log(student1.address.city);

const {name:Mamun,age:Age,address:{city,zip}} = student1;
console.log(Mamun,Age);