//data access
const data = [{
    id: 1,
    name : 'abul',
    address : 'kochu khet'
}]
//console.log(data[0].address);

const products = {
    count : 5000,
    data : [
        {id : 1, name:'lenevo laptop',price : 65000},
        {id: 2, name : 'mackbook',price :150000}
    ]
}
const result = products.data[0].price;
//console.log(products.data[1].id);
//console.log(result);

const user = {

    id : 5001,
    name: 'Ehsan',
    address:{
        street:{
            first: '54/1 barisal kajipara',
            second : 'dhopa barir mor',
            third : 'konay'
        },
        city:'Dhaka'
    }
    
}
console.log(user.address.street.second)