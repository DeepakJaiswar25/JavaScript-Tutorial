class users{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password

    }

     static logMe(){
        console.log(`Username: ${this.username}`)

    }

}
class teacher extends users{
    constructor(username,subject){
        super(username)
        this.subject=subject
    }
}

const chai=  new teacher('Deepak','DSA')
chai.logMe()  
// it gives error because static methods are accessed only by class and not by instance if it is users.logMe it will work
