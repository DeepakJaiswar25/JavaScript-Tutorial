const arr=[1,2,3,4]

//const totalnum= arr.reduce((actuator,curr)=>(actuator+curr),0)  //using arrow function

//using normal function
const totalnum= arr.reduce(function(actuator,curr){
    // console.log(`Actuator is ${actuator} and current value is ${curr}`);
    
    return actuator+curr
},2)
// console.log(totalnum)

const myarr=[1,2,3,4,5,6,7,8,9,10]
//to filter even numbers and then map to sqaure and reduce it to total sum 
// const finalsum=myarr.filter((num)=>num%2===0)
//                   .map((num)=> num*num)
//                   .reduce((act,num)=>(act+num),0)
// console.log(finalsum)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const price= shoppingCart.reduce((act,items)=>{
    return act+items.price;
},0)
console.log(price);
