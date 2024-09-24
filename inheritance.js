class Vehichle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(trust){
        console.log(`${trust}Gari chole na chole na chole na re gari chole na`);
    }
}

class Bus extends Vehichle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat =seat;
        this.ticketPrice=ticketPrice;
    }

}

class Truck extends Vehichle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}
const truck = new Truck('Hino','1000000','50kg');
console.log(truck);

const gari = new Vehichle('Bus', '500000');
console.log(gari)
gari.move(`asolei ki`)

