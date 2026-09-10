// reduce, sort, chaining

let products = [
  { title: "Mouse", price: 500, inStock: true },
  { title: "Keyboard", price: 1200, inStock: false },
  { title: "Monitor", price: 8000, inStock: true },
  { title: "Headphone", price: 1500, inStock: true },
];

let totalPrice = products.reduce((acc,current)=>{
    return acc += current.price;
},300);

console.log(totalPrice);

let num = [500,100,200,50,30,1000];
console.log(num.sort((a,b)=> a - b));

let sortProduct = products.sort((a,b)=> a.price - b.price);
console.log(sortProduct);

let estPrice = products.filter((p) => p.inStock == true).reduce((acc,cur)=>{
    return acc+= cur.price;
},0);

console.log(estPrice); 