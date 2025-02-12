const person = {
    name: "John",
    age: 35,
    greet: function(){
        console.log(`Hello My name is ${this.name} and ${this.age} old my ${this.profession}`);
    }
}
person.name ="Basha"
person["age"] = 67;// for changing dynamically;
console.log(person["age"]);
delete person.age;// shows udnefined 
console.log(person.age);
person.greet();
console.log(person.name);
Object.assign(person, { profession: "Developer", hobby: "Reading" });
person.greet();
console.log("name" in person);
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`hi i am ${this.name}`);
//     }
// }

// const user = new Person("Saurav", 24);

// console.log(user.name);
// user.greet();