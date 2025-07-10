// const promise1 =new Promise(function(resolve,reject){
//     setTimeout(function(){
       
//         console.log('First Promise')
//         resolve()
//     },1000)
// })
// promise1.then(function(){
//     console.log('First promise consumed')
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Second Promise')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Second promise consumed')
// })

// const promise3 =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Third Promise')
//         resolve({user:'Deepak',email:'Deepak@gmail.com'})
//     },1000)
// })
// promise3.then(function(data){
//     console.log(data)
//     console.log(data.user)
// })

// const promise4 = new Promise(function(resolve,reject){
//     let error= false
//     setTimeout(function(){
//     if(!error){
//         resolve({user:'Suraj',email:'suraj@gmail.com'})
//     }
//     else{
//         reject('Error: Somethin Wrong in JS')
//     }
//     },1000)
// })
// promise4.then(function(data){
//     console.log((data))
//     return data.user
// }).then(function(username){
//    console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log('Here after either reject or resolve')
// })

// const promise5= new Promise(function(resolve,reject){
//     let error= true
//     setTimeout(function(){
//     if(!error){
//         resolve({user:'Rohan',email:'rohan@gmail.com'})
//     }
//     else{
//         reject('Error: Somethin Wrong in JS')
//     }
//     },1000)
// })

// async function consumepromise5() {
//     try {
//      const response= await promise5 
//      console.log(response)  
//     } catch (error) {
//         console.log(error)
//     }   
// }
// consumepromise5()

// async function getusers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=  await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(users){
    return users.json()
})
.then(function(userdata){
    console.log(userdata)
})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('Finally Working')
})
