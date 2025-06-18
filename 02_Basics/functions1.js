

function demo(){
console.log("Hello World")
}

// demo();

function addtwonumbers(num1, num2){
    const result =num1 + num2
    console.log("Deepak")
    return result
    
}

const result= addtwonumbers(4,7)
console.log("Result:" ,result)


function loginMessage(username= "sam"){
    if(username===undefined){
        console.log("Please enter username") 
    }
    else{
        return  `${username}  just logged in`
    }
    
}

// console.log(loginMessage("Deepak"))

const user={ 
  name:"Deepak",
  age:27
}

function handleuser(user){
    console.log(`Hello ${user.name} and my age is ${user.age}`)
}
// handleuser(user);

handleuser({
    name: "sam",
    age: 39
})

const newarray=[100,200,300,900]

function returnsecondvalue(arr){
    return arr[1]
}

// console.log(returnsecondvalue(newarray))

function calculateCartPrice(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000,2500))