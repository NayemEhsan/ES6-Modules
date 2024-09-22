const numbers = [4,5,6,7,8,9,10];
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);

}
//console.log(doubled)

//another way
// map operration for loop through

const marvels = [ 4,5,8,9,6,3,10,12];
//simple function
function doubleIt(marv){
    return marv * 2;


}
//arrow function
const doubleIT2 = marv => marv + 2;


const result = marvels.map(doubleIt);
const result2 = marvels.map(doubleIT2);
// console.log(result,result2);


const result3= marvels.map(marv => marv * 4);
console.log(result3);