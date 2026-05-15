function validate_login(password,username){

    if (password.length >= 8 && username.length >= 8){

     return "valid"
} 
    else {
        return "invalid"
    } 

}

console.log(validate_login("121234", "12341234"))
