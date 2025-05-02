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


const fetchData = new Promise((resolve, error) => {
    setTimeout(() => {
        resolve("Data is fetched");
    }, 3000)
})

fetchData.then(data => console.log(data));

