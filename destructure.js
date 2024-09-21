const actor ={
    name:'Samanta',
    age : 30,
    phone : '01781897316',
    money : '25552565'
}
const {phone,age:boyos, money,name} = actor;
console.log(phone,boyos);

// const phone = actor.phone;
// const age = actor.age;
// const money = actor.money;
// const name =actor.name;

//arrat destructure
const numbers = [45,99];
const [first, second] = numbers;
const [x,y] =[12,85];

///////////////
function doubleThem(a,b){
    return [a*2,b*2];
}
const [first1,second1] = doubleThem(6,9);
console.log(first1,second1);
console.log(doubleThem(2,4))
console.log(...doubleThem(2,4))