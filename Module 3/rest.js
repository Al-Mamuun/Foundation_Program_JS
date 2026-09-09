// Function
function add(...number){
    let total = 0;
    for (const num of number){
        total += num;
    }
    return total;
};

const totalSum = add(1,2,3,4,5,6,7,8,9,10);
console.log(totalSum);

// Object 
const person = {
    name: "Mamun",
    age : 24,
    address: "Dhaka",
    designation: "Developer"
};

const {name,...remaining} = person;

console.log(remaining);

const arr = [1,2,3,4,5,6];
const [ , , ,...rest] = arr;
console.log(rest);



function something(first,...remain){
    console.log(first,remain);
};

something("Mamun",1,2,3,4,5,6,7,8,9,10);