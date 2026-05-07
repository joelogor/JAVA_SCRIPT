const prompt = require("prompt-sync")();
let a = prompt("Enter value of a: ")
let x;
let y;
let z;
    x = a+10;
    y = a - 10;
    z = a %10;
    a = a/( x*y*z);
console.log(a)
