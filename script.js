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

  // define the character strings we can use
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specials = "~`!@#$%^&*()-_+=}]{[:;<,>.?/";

  // set length equal to the length determined by passwordLength()
  var length = passwordLength();

  // print the length to the console for debugging/development
  console.log("Password length: " + length);

  // create array to hold the different types of characters desired in a password
  var characterTypes = ["letters", "uppercase", "numeric", "specials"]

  // create array equal in length to characterTypes[]
  var includeArray = new Array(characterTypes.length);

  // fill the includeArray with booleans corresponding to the characterTypes
  for (i=0; i<characterTypes.length; i++) {
    includeArray[i] = passwordInclude(characterTypes[i]);
    console.log("Include " + characterTypes[i] + " : " + includeArray[i]);  
  }

  var numberOfCharacterTypes = 0;
  for (i = 0; i < includeArray.length; i++) {
    numberOfCharacterTypes += includeArray[i];
  }

  if (numberOfCharacterTypes === 0){
    alert("You declined all characters, please begin again.");
    return "Try Again!";
  }

  var includeInPassword = new Array();

  //create a string including ALL characters specified by the user
  if (includeArray[0] === true) 
  includeInPassword += letters;
  console.log(includeInPassword);

  if (includeArray[1] === true) 
  includeInPassword += letters.toUpperCase();
  console.log(includeInPassword);

  if (includeArray[2] === true) 
  includeInPassword += numeric;
  console.log(includeInPassword);

  if (includeArray[3] === true) 
  includeInPassword += specials;
  console.log(includeInPassword);

  //create a string the length of the password required for each character type desired
  var passwordArray = new Array();
  for (i=0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * includeInPassword.length);
    passwordArray[i] = includeInPassword[randomNumber];
  }

  console.log("The password array is: " + passwordArray);
  return passwordArray.join("");
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


