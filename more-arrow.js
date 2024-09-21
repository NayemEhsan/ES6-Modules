const difference = (x,y) => x-y;
const multiply =( first,second,third)=>{
    const result = first * second * third;
    return result;
}

//single or 2 parameter
const showData = multiply(10,1,2);
//console.log(showData);

const getAge = (person) => person.age;//implicit return for arrow function and explicit for reguler function
const student = { name :'jhankar', age : 36}
const age = getAge(student);
//console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,8,77,66,3]);
//console.log(third);

//no parameter

const getPI = () => Math.PI;
console.log(getPI());


//large arrow function 
const doMath = (x,y,z)=>{
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
console.log(doMath(10,20,50));



