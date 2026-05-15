
function check_age(age){

    if(age <= 12){
    return "Child";
    }
    else if(age >= 13 && age <= 17){
    return "Teen";
    }
    else if (age >=18){
    return "Adult"
    }
}

 let   age = check_age(13)

console.log(age);
