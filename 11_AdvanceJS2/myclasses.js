class user{

    constructor(username,email,password) {
        this.username=username
        this.email=email
        this.password=password
    }

    // logMe(username){
    // console.log(`Username: ${this.username}`)
    // }
    encrypt(){
        return `${this.password}abc`
    }
    changeusername(){
        return `Username: ${this.username}`
    }

}

const chai= new user('chai','chai@gmail.com','chai@123')
console.log(chai)
console.log(chai.encrypt())
console.log(chai.changeusername())

//behind the scenes

function users(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

users.prototype.encrypt= function(){
    return  `${this.password}abc`
}
users.prototype.changeusername=function(){
    return `${this.username}`
}
const tea= new users('tea','tea@gmail.com','tea@123')
console.log(tea)
console.log(tea.encrypt())
console.log(tea.changeusername())
