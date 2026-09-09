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


const arr = ["Red","Green","Blue"];
const [first,second,] = arr;
const [,,third] = arr;
console.log(first,third);

const student2 = {
  name: "fahim",
  age: 20,
  address: {
    city: "Dhaka",
    zip: 1212,
  },
  hobbies: ["Gardening", "Painting"],
};

const {name,age,hobbies:[mamun,sakib]} = student2;

console.log(mamun);