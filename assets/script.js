// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var upperCriteria 
var lowerCriteria
var symbolsCriteria
var numbersCriteria
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()";
var numbers = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
console.log(generateBtn);

function generatePassword(){
  length = prompt("Select number of characters (8-128)");

    if(length < 8 || length > 128){
      alert("Wrong number of characters");
      return;
    }
    else if (length >= 8 && length <= 128){
     upperCriteria =  confirm("Select uppercase letters?");
    }

    if(upperCriteria === true || upperCriteria === false){
      lowerCriteria = confirm("Select lowercase letters?");
    }

    if(lowerCriteria === true || lowerCriteria === false){
      symbolsCriteria = confirm("Select symbols?");
    }

    if(symbolsCriteria === true || symbolsCriteria === false){
      numbersCriteria = confirm("Select numbers?");
    }
   
   if(upperCriteria === true){
      retVal = "";
  for (var i = 0, n = upperCase.length; i < length; ++i) {
      retVal += upperCase.charAt(Math.floor(Math.random() * n));
      console.log(retVal);
  }

  return retVal;
   }
    if(lowerCriteria === true){
    retVal = "";
for (var i = 0, n = lowerCase.length; i < length; ++i) {
    retVal += lowerCase.charAt(Math.floor(Math.random() * n));
}
return retVal;  
}

if(symbolsCriteria === true){
  retVal = "";
for (var i = 0, n = symbols.length; i < length; ++i) {
  retVal += symbols.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

if(numbersCriteria === true){
  retVal = "";
for (var i = 0, n = numbers.length; i < length; ++i) {
  retVal += numbers.charAt(Math.floor(Math.random() * n));
}
return retVal;
}
}
