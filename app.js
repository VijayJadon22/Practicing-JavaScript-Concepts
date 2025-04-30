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

function printA() {
    const a = "A is printing";
    return function printB(){
        const b = "B is prinitng";
        console.log(a, b);
    }
}

const newFn = printA();
newFn();