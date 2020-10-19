// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function writePassword holds password generated
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//push password generated to card body
function pushPassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
}

// List of characters that will be available in the password

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersList = "0123456789";
var specialsList = " ~`!@#$%^&*()-_+={}[]|\/:;'<>,.? ";
var finalPicks = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//completed password will return to this variable
var result = "";

// When generate button is clicked...
// User will be prompted for button criteria.
function generatePassword() {
  //Criteria 1: length of password.
  var length = prompt("Type number between 8 - 128: the value chosen will be the amount of characters in your password");

  if (length < 8 || length > 128) {
    alert("please only choose a number between 8 - 128")
    generatePassword();
  }

  //If a password length outside criteria, return to question
  alert("your pass word will be " + length + " characters long")

  // User Prompted for character types in password:

  // lowercase (yes or no)
  var choiceLower = confirm("Would you Like your password to include lower case letters?")
  //validate
  if (choiceLower = true) {
    alert("password will include lowercase letters");
  }
  else {
    alert("password will not include lowercase letters")
  }

  // uppercase (yes or no)
  var choiceUpper = confirm("Would you Like your password to include upper case letters?")
  //validate
  if (choiceUpper = true) {
    alert("password will include upper case letters");
  }
  else {
    alert("password will not include upper case letters")
  }

  // uppercase (yes or no)
  var choiceNumbers = confirm("Would you Like your password to include numbers?")
  //validate
  if (choiceNumbers = true) {
    alert("password will include numbers");
  }
  else {
    alert("password will not include numbers")
  }


  // special characters (yes or no)
  var choiceSpecials = confirm("Would you Like your password to include special characters?")
  //validate
  if (choiceSpecials = true) {
    alert("password will include special characters");
  }
  else {
    alert("password will not include special characters")
  }


  if (choiceLower === true) {
    finalPicks += lowerCase
  }

  if (choiceUpper === true) {
    finalPicks += upperCase
  }

  if (choiceNumbers === true) {
    finalPicks += numbersList
  }

  if (choiceSpecials === true) {
    finalPicks += specialsList
  }

  for (var f = 0; f < length; f++) {
    result += finalPicks.charAt(Math.floor(Math.random() * finalPicks.length));
  }
  return result;
}

alert(result)


// When all prompts answered: GENERATE MATCHING PASSWORD TO CRITERIA

// Display password in alert