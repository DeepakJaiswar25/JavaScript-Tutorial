const user={
    _username: "deepak",
    _password: "deep@123",

    get username(){
        return `${this._username}12332`
    },
    set username(value){
        this._username=username
    },

    get password(){
        return `${this._password}qwerty`
    },
    set password(value){
        this._username=username
    }
}

const tea = Object.create(user)
console.log(tea.username)
console.log(tea.password)
