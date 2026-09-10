let fruits = ["Apple","Banana","Mango","Orange"];

let new1 = fruits.filter((f) => f.length > 5);
let new2 = fruits.find((f) => f.length > 5);
let new3 = fruits.includes("Mango");
console.log(new1,new2,new3);

let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Fahim", marks: 70 },
];

let mamun = students.some((s)=> s.marks > 80);
let mamun1 = students.every((s)=> s.marks > 40);
console.log(mamun,mamun1);