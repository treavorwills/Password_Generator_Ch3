// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = passwordLength();
  console.log("Password length: " + length);

  var characterTypes = ["lowercase", "uppercase", "numeric", "special"]

  var includeArray = new Array(characterTypes.length);

  for (i=0; i<characterTypes.length; i++) {
    includeArray[i] = passwordInclude(characterTypes[i]);
    console.log("Include " + characterTypes[i] + " : " + includeArray[i]);  
  }

  return "poop";
}

// Function to prompt the user for desired password length, between 8 and 128
function passwordLength() {
  // length will be set equal to the user input
  let length = prompt("How many characters? Please enter a number between 8-128");

  // validate that the length is between 8 and 128, reprompt if this condition is not satisfied
  while(length < 8 || length > 128){
    length = prompt("Please enter a password length between 8 and 128")
  }

  // return the length
  return length;
}

// Function to determine whether to include specific character types
function passwordInclude(type){
  let useCharacter = confirm("Click OK to include " + type + " characters.")
  
  return useCharacter;
}


