// callback function

function greetings(greetingHandler,name){
   
    greetingHandler(name);
    // console.log(person);
}
const name = "tasnim";
const numbers = [45,55,96,100,102];
const object = {price : 45000, brand : 'Lenovo', memory : "8gb"}

function greetingHandler(name){
    console.log("good morning",name);
}
function greetEvening(name){
    console.log("good evening", name)
}
greetings(greetingHandler,'Tom hangs');
greetings(greetEvening,"Tom cruise")