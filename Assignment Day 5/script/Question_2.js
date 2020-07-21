class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.rmCoins=0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has added ${this.luCoins} coins`);
        return this;
    }
    rmCoins(){
        this.rmCoins--;
        console.log(`${this.name} has removed ${this.rmCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User
    {
    constructor(name,age,email,role)
    {
        super(name,age,email);
        this.role = role;
    }

   
    addCoins(user)
    {
        
        users = users.filter(u =>{
            return u.name == user.name; 
        })
    }

    rmCoins(user)
    {
        users = users.filter(u =>{
            return u.name == user.name; 
        })
    }

}

class Admin extends Moderator
    {
       addCourse(user,course)
       {
       user.courses.push(course);
       console.log(user);
       };

       remCourse(user,course)
       {
       user.courses.pop(course);
       console.log(user);
       }

 }


let user1 = new User('Piter',25,'dilip@gmail.com')
let user2 = new User('Marcus',24,'k@gmai.com')
let mod = new Moderator('Jenny',24,'b@gmail.com','Moderator');
let admin = new Admin('Herman',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
   console.log(element);
 });


 admin.addCourse(user1,'Javascript');
//admin.addCourse(user1,'Python');
//admin.remCourse(user1,'Python');



user1.login()
 user1.addCoins();
 //user1.addCoins();
 
//  user1.addCoins();
user1.rmCoins();
 user1.getDetails();
// user1.addCoins();
 //user1.addCoins();
// user1.logout()

//user1.login().addCoins().addCoins().getDetails().logout();

 mod.addCoins(user1);
//  mod.addCoins(user1);
//  mod.addCoins(user1);
//console.log(user1);