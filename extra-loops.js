
// for each loop
const numbers = [ 1,2,6,9,10,12];
const result = numbers.forEach(num => console.log(num * 2));

//filter loop it selects  specific logic must fullfill the consditions

const players =[75,55,96,85,76,69];
const selected = players.filter(p=> p>60);
// console.log(selected);

const friends = [ 'tom','john','michael','jhankar','masrafi','siam'];
const evenFriends = friends.filter(friend=> friend.length >3 );
// console.log(evenFriends);


//find ................
// if consdition fullfilled then the first element is returned
const oddFriends = friends.find(friend=> friend.length <5 );
console.log(oddFriends)