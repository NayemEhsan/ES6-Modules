// arguments only use in function,there is no use push,pop,map,filter

function sum(a,b,c){
    console.log(typeof arguments);
    const args = [...arguments];
    console.log(args);

    const result = a + b + c;
    return result;
}
const total = sum(12,85,96,45,85,99,35);
console.log(total);