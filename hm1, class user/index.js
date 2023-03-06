
const { create,  registerDate, deleteUser, inActive } = require('./user')

class User {
    constructor(username, password, age, isActive, dateCreated) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.isActive = isActive;
        this.dateCreated = dateCreated;
    }
}
let userArray = [];

let user1 = new User("angelan", "pass123", 12, false, "10.02.23");
let user2 = new User("marko", "pass123", 10, true, "13.02.23");
let user3 = new User("mite", "pass123", 12, true, "11.04.23");
let user4 = new User("veronika", "pass123", 20, false, "23.02.23");
let user5 = new User("sandra", "pass123", 25, true, "16.02.23");
let user6 = new User("kiki", "pass123", 25, false, "19.02.23");
let user7 = new User("hehe", "pass123", 55, true, "01.02.23");
let user8 = new User("hoho", "pass123", 45, true, "13.02.23");
let user9 = new User("haha", "pass123", 100, true, "13.02.23");
let user10 = new User("hihi", "pass123", 65, true, "13.02.23");

userArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);



create("users.json", userArray);
registerDate("registerDate.json", userArray);
deleteUser("deleteUser.json", "hehe");
inActive("users.json", userArray);



