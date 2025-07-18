const value = Math.PI
console.log(value);

const desc = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(desc);


const food = {
    name: 'Masala Chai',
    price: 250,
    isAvailable: true,
    greeting: function () {
        console.log("Welcome")
    }
}

console.log(food)
console.log(Object.getOwnPropertyDescriptor(food, "price"))
//defining single property
// Object.defineProperty(chai,'price',{
//     writable: false,
//     enumerable:false
// })
//defining single properties
Object.defineProperties(food, {
    name: {
        writable: false,
        enumerable: false
    },
    price: {
        writable: false,
        enumerable: false
    }
})
console.log(food)
for (const [key, value] of Object.entries(food)) {
    if (typeof value !== 'function') {
        console.log(`Key is ${key} and value is ${value}`)
    }

}
