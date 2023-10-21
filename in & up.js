// function signup(){
//     var user=document.getElementById("email");
//     var password=document.getElementById("pass");
//     save(user,password)

//     localStorage.setItem("email" , user.value );
//     localStorage.setItem("password" , password.value);
//     location.assign("sign in.html");
// }


// function save(email , password){
// // var email=document.getElementById("email");  

// // var password = document.getElementById("pass");


// if (password.value.length < 8){
//     password.style.border ="2px pink solid";
// }
// else password.style.border =""


// if(email.value.indexOf("@")==-1){
//     email.style.border="2px pink solid"
// }
// }

//  function signup() {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('pass').value;

//        localStorage.setItem('email',email);
//        localStorage.setItem('password',password);
//     //   location.assign('login.html');
//     if (password.value.length < 8){
//              password.style.border ="2px pink solid";
//          }
//         else password.style.border =""
        
        
//          if(email.value.indexOf("@")==-1){
//              email.style.border="2px pink solid"
//          }
//          }


function login(){

    var email = document.getElementById('emaile').value;
      var password = document.getElementById('passe').value;

    if (localStorage.getItem('email')== email && localStorage.getItem('password')== password )
        {alert('ok'); }  		

       else{
           alert(' Go To Signup Page');
       }
}
function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
  
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // location.assign('login.html');
  
    var passwordField = document.getElementById('pass');
    var emailField = document.getElementById('email');
  
    if (password.length < 8) {
      passwordField.style.border = "2px solid red";
    } else {
      passwordField.style.border = "";
    }
  
    if (email.indexOf("@") == -1) {
      emailField.style.border = "2px solid red";
    } else {
      emailField.style.border = "";
    }
  }