/*
8 ways to get undefined

1.variable that is not initialized will give undefined
2.function with no return
3.parameter that is not passed  will be undefined
4.If return has nothing on the right sight will return undefined 
5.property that doesn't exist on an object that will give you undefined
6.accessing array elements outside of the index element
7.Deleting an element inside an array
8.set a value directly to undefined
*/ 
let first;
// console.log(first);

function second(a,b){
   const total = a+b;
}
const result = second();
// console.log(result);

function third(a,b,c,d){
    const total2= a+b+c+d;
    // console.log(a,b,c,d);
}
third(1,2);

function noNegative(a,b){
    if(a < 0 || b< 0){
        return
    }
    return a+b;
}
const total3 =noNegative(2,-5);
// console.log(total3);

const fifth ={id : 2, name : "ponchom", age: 20};
// console.log(fifth.age,fifth.salary);

const sixth = [4,56,89,23,54,55,100];
// you should not do it , Instead use splice
delete sixth[1];
// console.log(sixth);
// console.log(sixth[1],sixth[5],sixth[100]);

const eight = undefined;
const ninth = null;
const data = { result : [], updated : null};

// console.log(typeof undefined,typeof null);

