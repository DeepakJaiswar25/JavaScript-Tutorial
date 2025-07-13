const heroes=["Ironman","Spiderman","Hulk"]
console.log(heroes.length)

const heroesrealname={
    Ironman : "Tony Stark",
    Spiderman : "Peter Parker",
    Hulk : "Bruce Banner "
}

console.log(heroesrealname.Hulk)

Array.prototype.hey= function(){
    console.log("Deepak wants to say hey!!!")
}

heroes.hey()
// heroesrealname.hey()

Object.prototype.hii=function(){
    console.log("Deepak wants to say hii!!!")
}
heroes.hii()
heroesrealname.hii()


//inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher ={
    subject : "java"
}

const teachingAssistant={
    role_TA : "grading Assignments"
}

const TAsupport={
    role_TA_Support: "make Assignment",
    __proto__ : teachingAssistant               //1st way to define prototype inheritance
}
console.log(TAsupport.role_TA)
// console.log(teachingAssistant.role_TA_Support)
teacher.__proto__=User                      //2nd way to define prototype inheritance
console.log(teacher.email)
// modern syntax and 3rd way to define prototype inheritance
Object.setPrototypeOf(teachingAssistant, teacher)
console.log(teachingAssistant.subject)


const anothername="Chai   "
String.prototype.truelength=function(){
    console.log(this.trim().length)
}

anothername.truelength()
"Hitesh     ".truelength()
