// {
//     var a = 5;
//     let b = 10;
//     const c = 15;
// }

// console.log(a, b, c);

function myFunction() {
    let localVar = "I am local";
    console.log("Inside Funtion",localVar);
}
myFunction();
console.log("Outside Funtion",localVar);