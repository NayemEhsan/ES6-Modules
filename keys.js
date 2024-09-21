const glass = { 
    name : 'glass',
    color : 'golden',
    price : 12,
    icCleaned:true
}
console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'icCleaned' ]
console.log(keys);

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
console.log(values);


const pair = Object.entries(glass);
// two dimensional array

//  [ 'name', 'glass' ],
//[ 'color', 'golden' ],
//[ 'price', 12 ],
//[ 'icCleaned', true ]
console.log(pair);
//delete
delete glass.icCleaned;
console.log(glass);
// sort by spread
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);
//freze
//Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass)