// var : no reasomn to use 
// let : asllow it to re assign
// const : do not allow it to reassign

const money =  25;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23,10,50,56,80];
numbers[1]= 55;
numbers.push(8,9,33,10);
console.log(numbers);

//object
const student = {
    name : 'pakhi',
    class : 12

}
console.log(student);

//loop 
let sum =0;
for(let i = 0; 1< 10; i++){
    const num = i;
sum = sum + num;
}
console.log(sum);