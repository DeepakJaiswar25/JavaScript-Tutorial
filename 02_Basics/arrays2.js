const marvel=["thor","antman","ironman"]
const dc=["batman","superman","flash"]
// console.log(marvel.push(dc))
// console.log(marvel);
const anime=["luffy","gon","naruto"]
const newarr=marvel.concat(dc)
// console.log(newarr);

const allheros=[... marvel,...dc,... anime]
// console.log(allheros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array= another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Deepak"))

// console.log(Array.isArray([2,1,34,432,"Deepak"]))

console.log(Array.from("Deepak"));

const score1=200
const score2=300
const score3=100

console.log(Array.of(1,4,7,0))

