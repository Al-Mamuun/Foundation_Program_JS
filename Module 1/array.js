for( let i = 0 ; i <= 5; i++){
    console.log(`Count: ${i}`);
}


console.log("Now Reverse: ");


for (let i = 5 ; i >= 0 ; i--){
    console.log(`Count: ${i}`);
}

console.log("I Love Fruits : ");

let fruites = ["Mango", "Jack", "Apple", "Orange"];

let i = 0;

while( i < fruites.length){
    console.log(`Fruits: ${fruites[i]}`);
    i++;
}

console.log()

let techStack = ["JS", "TS", "node", "react", "psql"];

for (let mamun of techStack)
{
    console.log(`Tech Stack: ${mamun}`);
}

let Object = {
    name: "Mamun",
    age : 22,
    address: "Dhaka"
};

for (let element in Object){
    console.log(element, "=>" , Object[element]);
}


let marks = 20;

for (let i = marks; i <= 50; i++ )
{
    if (i > 30)
    {
        break;
    }

    console.log(i);
}

for ( let i = 1; i <= 15; i++){
    if (i%2 != 0)
    {
        continue;
    }

    console.log(i);
}


let marks = [55, 82, 91, 45, 98, 63];

let max = marks[0];

for ( let i = 1; i <= marks.length ; i++){
    if (max < marks[i]){
        max = marks[i];
    }
}
console.log(max);


let sum = 0;

for( let mark of marks){
    sum += mark;
}

console.log(sum);


let marks = [55, 82, 91, 45, 98, 63];
let sum = 0;

for ( let i = 0; i < marks.length ; i++){
    sum += marks[i];
}
console.log(`Final Sum: ${sum}`);


let mamun = [];
for ( let i = marks.length - 1; i >= 0 ; i--){
    mamun.push(marks[i]);
}
console.log(mamun)