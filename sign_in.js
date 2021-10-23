const signInForm = document.getElementById('sign-in-form');
const signInBtn = document.getElementById('sign-in-btn');
const emailSignInInput = document.getElementById('emailSignInInput');
const passSignInInput = document.getElementById('pass-SignIn-Input');
const go = document.getElementById('go');
const error = document.getElementById('email_help');
signInForm.addEventListener("submit", storageLogIn);
let email1 = localStorage.getItem('email');
let pass1 = localStorage.getItem('password');
let emailCheck = false;
let passCheck = false;
function storageLogIn() {

    if (emailSignInInput.value == email1) {
        emailCheck = true;
    }
    if (passSignInInput.value == pass1) {
        passCheck = true;
    }
    if (emailCheck === true && passCheck === true) {
        signInForm.action = 'index.html';
        //home page after sign in :
    } else {
        signInForm.action = '#';
        error.innerText = 'Email or password is not correct';

    }
}



