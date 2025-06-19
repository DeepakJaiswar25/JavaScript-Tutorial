// const email=[]
// if(email){
//     console.log("User got email")
// }
// else{
//     console.log("User has no mail")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if(email.length==0){
//     console.log("email is empty")
// }
// const user={}

// if(Object.keys(user).length==0){
//     console.log("No user");
    
// }
// Nullish Coalescing Operator (??): null undefined
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;

// val1 =10??15
// val1 =null?? 20?? 15
val1 = undefined?? 20
// console.log(val1);


// Terniary Operator

// condition ? true : false

100>50 ? console.log("1"):console.log("0")

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
