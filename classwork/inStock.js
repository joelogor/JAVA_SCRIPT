const prompt = require("prompt-sync");
 const product = { 
    price: 1200, 
    inStock: true 
};
let price = prompt("Enter price ");

    if(product.inStock == false){
    console.log("Out of stock")
    } 
    if(product.price > 1000){
    console.log("Expensive")
    }
    else{
    console.log("Affordable")
    }
