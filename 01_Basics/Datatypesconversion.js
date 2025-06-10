
let score="33a"

let scorenumber= Number(score)

console.log(scorenumber);
console.log(typeof scorenumber);



// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " deepak"

let str3 = str1 + str2
// console.log(str3); Output =>hello deepak

// console.log("1" + 2); Output =>12  If there is String first then it converts other to string it concatenates 1 and 2 to 12
// console.log(1 + "2"); Output =>12
// console.log("1" + 2 + 2); Output =>122 If there is String first then it converts other to string it concatenates 1, 2  and 2 to 122
//console.log(1 + 2 + "2"); Output => 32 Here first arithmetic is done than converted into string

// console.log( (3 + 4) * 5 % 3);

//console.log(+true); Output =>1
//console.log(+"");   Output =>0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
