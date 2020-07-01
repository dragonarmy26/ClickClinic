function validate(){
    var email = document.getElementById("emailfield").value;
    var pass = document.getElementById("passfield").value;
    var confpass = document.getElementById("confpassfield").value;
    var name = document.getElementById("namefield").value;
    var phone = document.getElementById("phonefield").value;
    var date = document.getElementById("datefield").value;
    if(email==""){
        alert("Email field cannot be empty!");
        return false;
    }
    else if(pass==""){
        alert("Password field cannot be empty!");
        return false;
    }
    else if(confpass==""){
        alert("Confirm Password field cannot be empty!");
        return false;
    }
    else if(pass!=confpass){
        alert("Password mismatch with confirmation!");
        return false;
    }
    else if(name==""){
        alert("Full Name field cannot be empty!");
        return false;
    }
    else if(phone==""){
        alert("Phone Number field cannot be empty!");
        return false;
    }
    else if(date==""){
        alert("Date of Birth field cannot be empty!");
        return false;
    }
    else{
        return true;
    }
}