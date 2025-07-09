// const promiseone =new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('Async task is complete')
//     resolve()
// },1000)
// })

// promiseone.then(function(){
//     console.log('promise consumed')
// })

// new Promise(function(resolve,reject){
    
//     setTimeout(function(){
      
//         console.log('Hello Deepak')
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log('Hello Received')
// })

// const promisethree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hello")
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })
// promisethree.then(function(user){
//     console.log(user)
//    console.log(user.username)
// })

// const promisefour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//       let error=false
//       if(!error){
//         resolve({username: "Chai", email: "chai@example.com"})
//       }
//         else{
//             reject("Error: Something went wrong")
//         }
//     },1000)

// }).then(function(user){
//     console.log(user)
//     return user.email
// } ).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("After resolve and reject methods")
// })

// const promisefive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//       let error=true
//       if(!error){
//         resolve({username: "Chai", email: "chai@example.com"})
//       }
//         else{
//             reject("Error: Something went wrong")
//         }
//     },1000)
// })
 
// async function promisefiveconsume(){
//  try{

//     const response= await promisefive
//     console.log(response)
//  }
//  catch(error){
//     console.log(error)
//  }
// }
// promisefiveconsume()

// async function getAllUsers() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response)

//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
