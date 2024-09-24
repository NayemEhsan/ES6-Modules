const products = [
    {id : 1,name:'lenovo',price:65000},
    {id : 2,name:'dell',price:75000},
    {id : 3,name:'hp',price:60000},
    {id : 4,name:'mac',price:150000}
]
//map
const names = products.map(product=>product.name);
// console.(names);
const prices = products.map(price=>price.price);
//console.log(prices);

//for each
products.forEach(p=> console.log(p.id));

//filter
const expensive =products.filter(product=>product.price > 70000);
// console.log(expensive);

const affordable = products.find(p => p.price >70000);
// console.log(affordable);

//reduce


const total = products.reduce((acum, current)=>acum +current.price,0);
console.log(total);