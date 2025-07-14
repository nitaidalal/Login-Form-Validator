const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const form = document.querySelector('form');
form.addEventListener("submit",function(e){
    e.preventDefault();

    let isValid = true;

    //invalid email handling
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if(!emailRegex.test(email.value)){
        document.querySelector(".email-error").style.display = "initial";
        isValid = false;
        email.value = "";
    }else{
        document.querySelector(".email-error").style.display = "none";
    }   

    //invalid password handling
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password.value)){
        document.querySelector('.pass-error').style.display = "initial";
        isValid = false;
        password.value = "";
    }else{
        document.querySelector('.pass-error').style.display = "none";
    }

    if(isValid){
        document.querySelector('.result').style.display = "initial";
    }

    
})