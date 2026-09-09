
let price = 500;
let quantity = 3;

console.log(`Total Price: ${price*quantity} BDT \nPlz pay your own.`)

function getDiscount(price){
    return (price * 10) / 100;
}

console.log(`You saved: ${getDiscount(price)} taka\nYour total bill is now ${price * quantity - getDiscount(price)} taka`);

let stack = 5;
console.log(`Status: ${stack > 0 ? "In Stack" + " " + stack: "Out of Stack"}`);