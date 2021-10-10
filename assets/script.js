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

   // upperCriteria

   //only uppercase
   if(upperCriteria === true && lowerCriteria === false && symbolsCriteria === false && numbersCriteria === false){
      retVal = "";
  for (var i = 0, n = upperCase.length; i < length; ++i) {
      retVal += upperCase.charAt(Math.floor(Math.random() * n));
      console.log(retVal);
  }

  return retVal;
}

  //uppercase + lowercase
  else if(upperCriteria === true && lowerCriteria === true && symbolsCriteria === false && numbersCriteria === false){
    retVal = "";
  for (var i = 0, n = upperCase.concat(lowerCase).length; i < length; ++i) {
    retVal += upperCase.concat(lowerCase).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
  }

  return retVal;
  }

  //uppercase + symbols
  else if(upperCriteria === true && lowerCriteria === false && symbolsCriteria === true && numbersCriteria === false){
    retVal = "";
for (var i = 0, n = upperCase.concat(symbols).length; i < length; ++i) {
    retVal += upperCase.concat(symbols).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
}

return retVal;
}

//uppercase + numbers
else if(upperCriteria === true && lowerCriteria === false && symbolsCriteria === false && numbersCriteria === true){
  retVal = "";
for (var i = 0, n = upperCase.concat(numbers).length; i < length; ++i) {
  retVal += upperCase.concat(numbers).charAt(Math.floor(Math.random() * n));
  console.log(retVal);
}

return retVal;
}


  //uppercase + lowercase + symbols
  else if(upperCriteria === true && lowerCriteria === true && symbolsCriteria === true && numbersCriteria === false){
    retVal = "";
  for (var i = 0, n = upperCase.concat(lowerCase, symbols).length; i < length; ++i) {
    retVal += upperCase.concat(lowerCase, symbols).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
  }

  return retVal;
  }

  //upercase + lowercase + numbers
  else if(upperCriteria === true && lowerCriteria === true && symbolsCriteria === false && numbersCriteria === true){
    retVal = "";
for (var i = 0, n = upperCase.concat(lowerCase, numbers).length; i < length; ++i) {
    retVal += upperCase.concat(lowerCase, numbers).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
}

return retVal;
}

  //uppercase + lowercase + symbols + numbers
  else if(upperCriteria === true && lowerCriteria === true && symbolsCriteria === true && numbersCriteria === true){
    retVal = "";
  for (var i = 0, n = upperCase.concat(lowerCase, symbols, numbers).length; i < length; ++i) {
    retVal += upperCase.concat(lowerCase, symbols, numbers).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
  }

  return retVal;
  }




    //lowerCriteria

    //only lowercase
       if(upperCriteria === false && lowerCriteria === true && symbolsCriteria === false && numbersCriteria == false){
       retVal = "";
    for (var i = 0, n = lowerCase.length; i < length; ++i) {
       retVal += lowerCase.charAt(Math.floor(Math.random() * n));
    }
    return retVal;  
    }

  //lowercase + symbols
 else if(upperCriteria == false && lowerCriteria === true && symbolsCriteria === true && numbersCriteria === false){
    retVal = "";
for (var i = 0, n = lowerCase.concat(symbols).length; i < length; ++i) {
    retVal += lowerCase.concat(symbols).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
}

return retVal;
}

//lowercase + numbers
 else if(upperCriteria === false && lowerCriteria === true && symbolsCriteria === false && numbersCriteria === true){
  retVal = "";
for (var i = 0, n = lowerCase.concat(numbers).length; i < length; ++i) {
  retVal += lowerCase.concat(numbers).charAt(Math.floor(Math.random() * n));
  console.log(retVal);
}

return retVal;
}



  //lowercase + symbols + numbers
  else if(upperCriteria === false && lowerCriteria === true && symbolsCriteria === true && numbersCriteria === true){
    retVal = "";
  for (var i = 0, n = lowerCase.concat(symbols, numbers).length; i < length; ++i) {
    retVal += lowerCase.concat(symbols, numbers).charAt(Math.floor(Math.random() * n));
    console.log(retVal);
  }

  return retVal;
  }

  //symbols
  //only symbols
   if(upperCriteria === false && lowerCriteria === false && symbolsCriteria === true && numbersCriteria == false){
    retVal = "";
 for (var i = 0, n = symbols.length; i < length; ++i) {
    retVal += symbols.charAt(Math.floor(Math.random() * n));
 }
 return retVal;  
 }

//symbols + numbers
else if(upperCriteria == false && lowerCriteria === false && symbolsCriteria === true && numbersCriteria === true){
 retVal = "";
for (var i = 0, n = symbols.concat(numbers).length; i < length; ++i) {
 retVal += symbols.concat(numbers).charAt(Math.floor(Math.random() * n));
 console.log(retVal);
}

return retVal;
}

  }
