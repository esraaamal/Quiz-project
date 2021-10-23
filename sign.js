const sign_Btn=document.getElementById("signup_btn");
const form=document.getElementById("form");
sign_Btn.addEventListener("click",sginFunction);





//username

const input_username = document.getElementById("input_username");
const username_help = document.getElementById("username_help");
const username_format= /^[a-zA-Z0-9_$\.]{4,16}$/;
//email

const input_email = document.getElementById("input_email");
const email_help = document.getElementById("email_help");
const email_format = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;

//password
const input_pass = document.getElementById("input_pass");
const pass_help = document.getElementById("pass_help");

const format_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

   
    

function sginFunction() {

    //userName
    if(input_username.value===""){

        username_help.innerHTML="username is empty";
        username_help.style.color="red"
        
     }
     else {
    
        
        if (input_username.value.match(username_format)){
           
            username_help.innerHTML="";
            username_help.style.color="green"
        }
        else {
            
            username_help.innerHTML="username not valid";
            username_help.style.color="red"
        }
    }

    //email
   
 if(input_email.value===""){

    email_help.innerHTML="email is empty";
    email_help.style.color="red"

 }
 else {

    
    if (input_email.value.match(email_format)){
       
        email_help.innerHTML="";
        email_help.style.color="green"


    }
    else {
        
        email_help.innerHTML="email not valid";
        email_help.style.color="red"
    }
}



//pass
if(input_pass.value===""){
   
    pass_help.innerHTML="Password is empty ";
    pass_help.style.color="red";
}
else{
  if(input_pass.value.match(format_pass)){
    pass_help.innerHTML="";
    pass_help.style.color="green";
    }
    else{
       
        pass_help.innerHTML="Password Not Valid";  
        pass_help.style.color="red";
       
    }
    
    
   
   
   
}}
// let usernames =[];
// let passwords=[];
// let emails=[];

let users = [];

 form.addEventListener("submit",f);

 function f(){

    if(input_username.value.match(username_format)&&input_email.value.match(email_format)&&input_pass.value.match(format_pass)){
usernames.push(input_username.value);
passwords.push(input_pass.value);
emails.push(input_email.value);

users.push({"username" : input_username.value, "password" : input_pass.value, "email":input_email.value});

localStorage.setItem("Usernames",JSON.stringify(usernames));
localStorage.setItem("emails",JSON.stringify(emails));
localStorage.setItem("passwords",JSON.stringify(passwords));
localStorage.setItem("users",JSON.stringify(users));

input_username.value="";
input_email.value="";
input_pass.value="";

    }
 }





