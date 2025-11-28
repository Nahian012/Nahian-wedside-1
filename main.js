let name=document.getElementById('name');
let email=document.getElementById('mail');
let pass=document.getElementById('pass');
let confirmpass=document.getElementById('cpass');
let contact=document.getElementById('cnum');
let date=document.getElementById('date')
let error=document.getElementById('show');
error.style.color="red";
error.style.fontFamily="cursive";

function validate(){
  if (name.value=="" || name.value==null){
    error.innerText="Name is required !!!"
    return false
  }
  else if (email.value==""){
    error.innerText="E-mail is required !!!"
    return false    
  }
  else if (pass.value.length<8){
    error.innerText="Password should have minimum 8 characters !!!"
    return false
  }
  else if (confirmpass.value!=pass.value){
    error.innerText="Passwords didn't match !!!"
    return false
  }
  else if (contact.value.length!=11){
    error.innerText="Contact Number must be 11 digits !!!"
    return false
  }
  else if (date.value==""){
    error.innerText="date is required"
    return false
  }

