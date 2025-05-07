
// const obj = {
//     name: "Vijay",
//     age:26
// }
// console.log(obj);

// function createObject(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const newObj = new createObject("Vijay", 26);
// console.log(newObj);

// const newObj = new Object();
// newObj.name = "Vijay";
// newObj.age = 26;

// console.log(newObj);

// class Person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const newObj = new Person("Vijay", 26);
// console.log(newObj);

const person = {
    isMen: true,
    walk() {
        console.log(`${this.name} is walking`);
    },
    run: function () {
        console.log(`${this.name} is running`);
    }
}

const vijay = Object.create(person);
vijay.name = "Vijay";

vijay.walk();