
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    flag1 = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    flag1 = false;
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    flag2 = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    flag2 = false;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    flag3 = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    flag3 = false;
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    flag4 = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    flag4 =false;
  }
  flag5 = flag1&&flag2&&flag3&&flag4;
}

function hide(){
  if(flag5 == true){
    let alt = document.getElementById("usrname").value.indexOf('@');
    let commas = document.getElementById("usrname").value.indexOf('.');
    if(commas >alt && alt>0){
      document.getElementById("login").style.display = "none";
      document.getElementById("store").style.display = "block";
      return true;
    }else{
      alert("Invalid email!");
      return false;
    }
  }else{
    return false;
  }
}


function check(){
  var watch = document.getElementById("watch").value;
  var flower = document.getElementById("flower").value;
  var car = document.getElementById("car").value;
  if(watch==''||flower==''||car==''){
    alert("Cannot be blank!");
    return false;
  }else{
    return true;
  }
}
