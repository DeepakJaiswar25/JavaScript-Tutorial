// const user =new Object()
// console.log(user)

const user={}

user.name="Suraj"
user.age=28
user.Gender="Male"
user.married=false

// console.log(user)

const instauser= {
    channelname : "BB ki Vines",
    age:  30,
    name: {
        fullName:{
            firstName:"Bhuvan",
            LastName:"Bam"
        }
    },
    subscribers: "10 Million",
    isChannelActive: true
}

// console.log(instauser.name.fullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj = Object.assign({},obj1,obj2,obj4)

const obj ={...obj1,...obj2,...obj4}
// console.log(obj);

// console.log(user)
// console.log(Object.entries(user))

// console.log(Object.keys(user))
// console.log(Object.values(user))

// console.log(user.hasOwnProperty("Gender"));
const test=[
    {
        id:1,
        email:"test1@gmail.com"
    },
    {
        id:2,
        email:"test2@gmail.com"
    },
    {
        id:3,
        email:"test3@gmail.com"
    }
]
console.log(test[2].email)

const course={

    coursename:"Java in 30 days",
    courseInstructor:"Telusko",
    courseprice:999
}

let {courseInstructor:instructor}=course // its called object destructuring
console.log(instructor)  //output: telusko
instructor="Code with Harry"
console.log(instructor)  //output: Code with Harry because we changed it to harry but only to copy of course
console.log(course.courseInstructor) //output: telusko because we changed it to copy and original course object is unchanged
// course.courseInstructor="Code with Harry" 
// console.log(course.courseInstructor) //output: Code with Harry because now we changed to original output
// console.log(instructor)

/*  JSON Example
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

[
    {},
    {},
    {}
]

*/