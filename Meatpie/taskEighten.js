const prompt = require("prompt-sync")();

let number = Number(prompt("Enter numberOne: "));
let remainder = number %2;

console.log(remainder)
