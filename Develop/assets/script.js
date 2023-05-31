// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// chactertype arrays
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const specialChar = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

// Create vartiables that will hold whether the criteria was selected.
var passwordLength;
var yesLower;
var yesUpper;
var yesNumber;
var yesSpecialChar;
// An empty array to concat charcater arrays the user would like to include
var usersCriteria = [];

// Define the function generatePassword()
function generatePassword() {
  // Prompt user for password length and console log it.
  passwordLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128");
  console.log("Password length:" + passwordLength);
  // Create an if statement to make sure they put in a value that meets OUR criteria
  if(!passwordLength) {
    alert("Please define the password's length. Press OK and try again.");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password must be between 8 and 128 characters long... try again.");
    console.log("Password length:" + passwordLength);
  } else { 
    // If their length is accepted, prompt for each criteria and console log the responses
    yesLower = confirm("Would you like to include lower case letters?");
    console.log("Lowercase? " + yesLower);
    yesUpper = confirm("Will this contain upper case letters?");
    console.log("Uppercase? " + yesUpper);
    yesNumber = confirm("Will this contain numbers?");
    console.log("Numbers? " + yesNumber);
    yesSpecialChar = confirm("Will this contain special characters?");
    console.log("Special Characters? " + yesSpecialChar);
  }

  //now i will concat all the character arrays together based on the criteria accepted.
  if (!yesLower && !yesUpper && !yesNumber && !yesSpecialChar) {
    usersCriteria = alert("Please choose at least one criteria")
  } else {
    if (yesLower) {
      usersCriteria = usersCriteria.concat(lowerCase)
    console.log(usersCriteria)
    }
    if (yesUpper) {
      usersCriteria = usersCriteria.concat(upperCase)
    console.log(usersCriteria)
    }
    if (yesNumber) {
      usersCriteria = usersCriteria.concat(numbers)
    console.log(usersCriteria)
    }
    if (yesSpecialChar) {
      usersCriteria = usersCriteria.concat(specialChar)
    console.log(usersCriteria)
    }
  // Now that criteria have been determined and all the characters available
  // have been logged into the usersCriteria array
  // We must create a random generator using Mathrandom

  // empty string to add characters
  var ranGenPassword = ""
  // random generator    
  for (var i = 0; i < passwordLength; i++) {
    ranGenPassword = ranGenPassword + usersCriteria[Math.floor(Math.random() * usersCriteria.length)];
    console.log(ranGenPassword)
  }
  // returns the value of the random generated password and print using
  // the writePassword() function
  return ranGenPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
