const user={
     username:"Deepak",
     age:27,
     Welcome_Message:function(){
        console.log(`${this.username} Welcome to this website`)
        console.log(this)
     }

}
// console.log(user.Welcome_Message())
// console.log(this)


// function chai(){
//     let username = "Deepak"
//     console.log(this.username);
// }

// // chai()
// const chai= function(){

//     const username="Deepak"
//     console.log(this.username)
//     console.log(this)
// }
//  chai()    

// const code= ()=>{
//     console.log(this)
// }
// code()

// const addtwo=(num1, num2)=>{
//     return num1 +num2
// }

// const addtwo=(num1,num2)=>num1+ num2
// const addtwo=(num1,num2)=>(num1+ num2)
const addtwo=(num1,num2)=>({username:"Deepak"})
console.log(addtwo(3,4))
