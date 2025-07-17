class user{

    constructor(username) {
        this.username=username
       
    }
   logMe(){
    console.log(`Username: ${this.username}`)
   }

}

class teacher extends user{
constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
}

addcourse(){
    console.log(`Course added by ${this.username}`)
}

}

const chai= new user('chai','chai@gmail.com','chai@123')
console.log(chai)
const masalachai= new teacher('masalachai','masalachai@gmail.com','masalachai@123')
console.log(masalachai)

chai.logMe()
masalachai.addcourse()
masalachai.logMe()
// chai.addcourse()
