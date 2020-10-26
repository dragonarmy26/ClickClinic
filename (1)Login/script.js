function validlogin(){
    var email = document.getElementById("emailfield").value;
    var pass = document.getElementById("passfield").value;
    alert("Email: admin@mail.com\nPassword: admin");
    if(email=="admin@mail.com" && pass=="admin"){
        return true;
    }
    else if(email==""){
        alert("Email field cannot be empty!");
        return false;
    }
    else if(pass==""){
        alert("Password field cannot be empty!");
        return false;
    }
    else{
        alert("Email or password is wrong!");
        return false;
    }
}
