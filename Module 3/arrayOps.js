let fruits = ["Apple","Banana","Mango","Orange"];

let newFruits = fruits.forEach((f,idx)=>{console.log(`${idx + 1} -> ${f}`)});

for (let m of fruits){
    console.log(m)};


let mamun = fruits.map((f)=>f.toLowerCase());
let mamun1 = fruits.map((f)=>f.toUpperCase());
console.log(mamun,"\n",mamun1);

let mamun3 = fruits.filter((f)=>f.length>5);
console.log(mamun3);