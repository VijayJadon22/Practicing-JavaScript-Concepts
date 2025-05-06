
// function greet(name) {
//     return (`Hello, ${name}`);
// }

// function processUser(name,fn) {
//     console.log(fn(name));
// }

// processUser("Vijay", greet);


function greet(name) {
    return (...args) => {
        console.log(`Hello, ${name}`)
    }
}

const greetUser = greet("Vijay");
greetUser();