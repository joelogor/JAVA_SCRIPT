const prompt = require("prompt-sync")();
const user = { name: "John", age: 17 };

let age = prompt("Enter age:");
    if(age >= 18){
        console.log(user.name + " is an Adult")
    }
    else{
        console.log(user.name + " is a Minor")
    }
