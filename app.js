// {
//     var a = 5;
//     let b = 10;
//     const c = 15;
// }

// console.log(a, b, c);

// function myFunction() {
//     let localVar = "I am local";
//     console.log("Inside Funtion",localVar);
// }
// myFunction();
// console.log("Outside Funtion",localVar);

// {
//     var a = "Var type";
//     let b = "let type";
//     const c = "const type";
//     console.log(a, b, c);
// }
// // console.log(a, b, c);  /* will throw an error b is not defined as let and const are block scope and cannot be accessed outside block but var can be accessed outside block*/
// console.log(a);

// function printA() {
//     const a = "A is printing";
//     return function printB(){
//         const b = "B is prinitng";
//         console.log(a, b);
//     }
// }

// const newFn = printA();
// newFn();

// console.log(a);
// var a = "Hello";

// function traditionalFunction() {
//     this.name = "vijay";
//     setTimeout(function () {
//         console.log(this.name);
//     }, 1000)
// }

// function ArrowFunction() {
//     this.name = "vijay";
//     setTimeout(() => {
//         console.log(this.name);
//     }, 1000)
// }

// // traditionalFunction();
// ArrowFunction();

// function greet(name = "Vijay") {
//     console.log(`Hello, ${name}`);
// }

// greet("Ajay");

// const [x, y] = [1, 2];
// console.log(x, y);

// const obj = {
//     name: "vijay",
//     place:"Gwalior"
// }
// const { name, place } = obj;
// console.log(name, place);

// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];
// console.log(newArr);

// function add(...num) {
//     const ans = num.reduce((total, a) => total += a, 0);
//     console.log(ans);
// }

// add(2, 3, 4, 5);


// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Data Fetched!"), 2000);
// });

// fetchData.then((data) => console.log(data));


// const fetchData = new Promise((resolve, error) => {
//     setTimeout(() => {
//         resolve("Data is fetched");
//     }, 3000)
// })

// fetchData.then(data => console.log(data));

// const greet = () => console.log("Hello");
// greet();

// function greet() {
//     console.log(this);
// }
// greet();

// const greet = () => {
//     console.log(this);
// }
// greet();



// const obj = {
//     name: "Vijay",
//     greet: function (){
//         console.log(`Hello, ${this.name}`);
//     },
//     place: "gwalior",
//     greetAgain: () => {
//         console.log(`Hello, ${this.name}`);
//     }
// }

// obj.greetAgain();


// function newFn() {
//     console.log(arguments);
// }
// newFn();

// function xyz(){
//     if (false) {
//         var b = 25;
//         const a = 23;

//     }
//     console.log("b", b);
//     console.log("a", a);
// }

// xyz();


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Promise is resolved!"), 3000);
//     })
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const fetchData = async () => {
//     try {
//         const response = await new Promise((resolve, reject) => setTimeout(() => resolve("Data Fetched"), 3000));
//         console.log(response); // Output: "Data received!"
//     } catch (error) {
//         console.log(error); // Handles errors
//     }
// }

// fetchData();

// const apiCall1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const apiCall2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// const apiCall3 = fetch("https://jsonplaceholder.typicode.com/todos/3");

// Promise.all([apiCall1, apiCall2, apiCall3])
//     .then(responses => Promise.all(responses.map((response) => response.json())))
//     .then(data => data.forEach((res) => console.log(res.title)))
//     .catch(error => console.log(error));


// Promise.allSettled([
//     fetch("https://jsonplaceholder.typicode.com/todos/1"),
//     fetch("https://jsonplaceholder.typicode.com/tod/2"),
//     fetch("https://jsonplaceholder.typicode.com/todos/3")
// ])
//     .then(result => Promise.all(result.map(res => res.status === "fulfilled" ? res.value.json() : res)))
//     .then(response => response.map((item, index) => {
//         if (item) {
//             console.log(item);
//         } else {
//             console.log(`Error: in API ${index}`)
//         }
//     }))

// const containerDiv = document.querySelector(".container");
const btn = document.querySelector(".button");
const pressedP = document.querySelector(".incrementPressed");
const countP = document.querySelector(".incrementCount");
let pressedNum = 0;
let countNum = 0;

console.log(pressedNum);
console.log(countNum);

const debounceEffect = _.debounce(() => {
    countNum += 1;
    countP.innerText = countNum;
}, 3000);

btn.addEventListener("click", () => {
    pressedNum += 1;
    pressedP.innerText = pressedNum;
    debounceEffect();
})

