// declaration of global variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    validateInputs();
});
function validateInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    // trim remove unecessary spaces on the front and back end.

    // validate username
    if(usernameValue === ''){
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }
    if(emailValue === "") {
        setError(email, "Email is required"); 
    }  else {
        setSuccess(email);
    }
    if(passwordValue === "") {
        setError(password, "Password is required");
    }  else {
        setSuccess(password);
    }
    if(confirmPasswordValue === ""){
        setError(confirmPassword,"Please confirm your password");
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords do not match")
    }else {
        setSuccess(confirmPassword);
        showsuccessMessage();
        
}
function setError(input, message){
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}
function setSuccess(input) {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");

  


}

function showsuccessMessage(){

    const formContainer = document.querySelector(".container");
        formContainer.style.display = "none";
        const successContainer = document.querySelector(".success-message");
        successContainer.style.display = "block";
    }
}


