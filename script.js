//Assignment Code
var generateBtn = document.querySelector("#generate");  
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCh = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

//Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
};

//Create an empty string, since we don't know what user's selection is going to be
//If confirm_uppercase is true
//Add uppercase into totalCharacters' string
function generatePassword(passwordLength, confirmUppercase, confirmLowercase, confirmNumeric, confirmSpecial) {
  var totalCharacters = ""; 
  if (confirmUppercase) { 
    totalCharacters += uppercase;   
  }
  if (confirmLowercase) {
    totalCharacters += lowercase;
  }
  if (confirmNumeric) {
    totalCharacters += numeric;
  }
  if (confirmSpecial) {
    totalCharacters += specialCh;
  }

//create loop to generate one character at a time
//randomly generate password within the character string
  var password = "";
  for (i = 0; i <= passwordLength; i++) { 
    var index = Math.floor(Math.random() * totalCharacters.length);
    var character = totalCharacters[index];
    password += character;
  };
  return password;
}

//Outcome of user's selections
function afterPasswordButtonClick() {
  var passwordLength = howMany(); 
  var confirmUppercase = upperCase(); 
  var confirmLowercase = lowerCase(); 
  var confirmNumeric = numericNum(); 
  var confirmSpecial = special(); 

//Measure if user clicked at least one of the character type
  if (confirmUppercase || confirmLowercase || confirmNumeric || confirmSpecial == true) {
  } else {
    alert("At lease one of the character type must be selected.");
    return;
  }
  var password = generatePassword(passwordLength, confirmUppercase, confirmLowercase, confirmNumeric, confirmSpecial);
  writePassword(password);

//User choose the password length
  function howMany() {
    var selectLength = prompt("How many characters would you like your password to contain?");
    if (selectLength < 8) {
      alert("Password length must be at least 8 characters.");
      return howMany();
    } else if (selectLength > 128) {
      alert("Password length must be no more than 128 characters.")
      return howMany();
    } else {
      return selectLength;
    }
  };

//User confirm whether or not to include uppercase 
  function upperCase() {
    var confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
    if (confirmUppercase == true) {  //get a Boolean result using confirm method
      return confirmUppercase;
    }
  };

//User confirm whether or not to include lowercase 
  function lowerCase() {
    var confirmLowercase = confirm("Click OK to confirm including lowercase characters.");
    if (confirmLowercase == true) {  //get a Boolean result using confirm method
      return confirmLowercase;
    }
  };

//User confirm whether or not to include numeric 
  function numericNum() {
    var confirmNumeric = confirm("Click OK to confirm including numeric numbers.");
    if (confirmNumeric == true) {
      return confirmNumeric;
    }
  };

//User confirm whether or not to include special characters 
  function special() {
    var confirmSpecial = confirm("Click OK to confirm including special characters.");
    if (confirmSpecial == true) {
      return confirmSpecial;
    }
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", afterPasswordButtonClick);








