class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score=0;
    }
    login(){
        console.log(this.email, "has logged in system")
        return this;
    }
    logout(){
        console.log(this.email, "has logged out")
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, " score is " , this.score);
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
         users = users.filter(u =>{
            return u.email != user.email;
         })
    }
}

var userOne = new User("shau@gg.com", "shau")
var userTwo = new User("yash@gg.com", "yash")

var admin = new Admin("hehe@ff.com", "hehe")

admin.deleteUser(userTwo)

var users = [userOne, userTwo, admin]

console.log(users)
