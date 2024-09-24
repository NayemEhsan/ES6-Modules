class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
const foridi = new Person('Humayun Foridi', '60 years');
console.log(foridi);
foridi.sleep();