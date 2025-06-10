const date =new Date();
console.log(typeof date)
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toISOString())

const myCreatedDate=new Date(2023,0,1,5,20);
// console.log(myCreatedDate.toLocaleString())

// console.log(myCreatedDate.getMonth()+1)

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    day:"2-digit",
    month: "2-digit",
    year:"2-digit"
}))