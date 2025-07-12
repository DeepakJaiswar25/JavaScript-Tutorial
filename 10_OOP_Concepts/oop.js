const user={
    username:"Deepak",
    email : "deepak@gmail.com",
    isLoggedIn : true,
    getUserDetails : function(){
            console.log(this)
    }
}

// console.log(this)

// console.log(user.getUserDetails())

const userdetail = function(username,email,isLoggedIn){
    this.username=username
    this.email= email
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

}


const userone= new userdetail("Suraj","Suraj@gmail.com",false)
const usertwo= new userdetail("Deepak","Deepak@gmail.com",true)

console.log(userone.greeting())
console.log(usertwo.constructor)
