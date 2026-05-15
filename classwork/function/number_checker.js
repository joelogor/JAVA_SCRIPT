const prompt = require("prompt-sync")();

let number = prompt("Enter number: ")

    if(number %2 == 0){
    
    console.log(" Even ");
   }else if ( number %2 == 1){
   console.log(" Odd ");
   }
