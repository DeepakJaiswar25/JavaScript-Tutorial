

const obj= new Object()

obj.salary=20000
obj.name="Deepak"
// console.log(obj.name);
// console.log(obj.salary);
// console.log(obj)
//Define Symbol
const mysym= Symbol("key1")
console.log(typeof mysym)
const obj1={ 
    empname:"Deepak",
    salary: 50000,
    [mysym]: "key12",
    Projects:["icare","IVR","RFTR"],
    isLoggedIn: true
}
// console.log(typeof obj1);
// console.log("Dot method");

// console.log(obj1.empname);
// console.log(obj1.salary);
// console.log(obj1.Projects);
// console.log(obj1.isLoggedIn);
// console.log("Another Method")
// console.log(obj1["empname"]);
// console.log(obj1["salary"]);
// console.log(obj1["Projects"]);
// console.log(obj1["isLoggedIn"]);
console.log(obj1[mysym])

obj1.salary=60000
console.log(obj1.salary)
// Object.freeze(obj1)
obj1.salary=80000
console.log(obj1.salary)
console.log(obj1)

obj1.greeting = function(){
    console.log("Hello User")
}
// console.log(obj1.greeting());
obj1.greeting2= function(){
    console.log(`Hello ${this.empname}`)
}
// console.log(obj1.greeting2());