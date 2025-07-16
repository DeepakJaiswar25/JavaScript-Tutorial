class user{

    constructor(username,password){
        this.username=username
        this.password=password
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
         this._username=value
    }

    get password(){
        return `${this._password}abcd`;
    }
    set password(value){
         this._password=value
    }

    
}


const deepak =new user("deepak@gmail.com","1234")
console.log(deepak.username);
console.log(deepak.password);
