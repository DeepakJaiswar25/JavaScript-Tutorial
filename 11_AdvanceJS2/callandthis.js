function setusername(username) {
  this.username= username
}


const createuser=function(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const user1= new createuser('Deepak','deepak@gmail.com','Deepak@123')
console.log(user1);
