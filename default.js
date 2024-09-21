// default --> if value not provided, take this as default.
// parameter and pass arguments
function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2,result);
    return result;
}
//const sum = add(5,0);
//const count = add(5,7);

function fullName( first='', last = ''){
    const full = first + ' ' + last;
    console.log(full);
    return full;
}
const name = fullName('Naym', 'Ehsan');
//array
function friends(numbers =[]){

}
//object
 function person(human={}){

 }