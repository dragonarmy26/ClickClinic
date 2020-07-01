function validreset(){
    var email = document.getElementById("emailfield").value;
    if(email==""){
        alert("Email field cannot be empty!");
        return false;
    }
    else{
        alert("Email to reset your password has been sent!");
        return true;
    }
}