// Assignment Code
var generateBtn = document.querySelector("#generate");  //this will generate button every time (point to the first element in the document)
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCh = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // use backslash escape character to treat " specially 


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password; //.value -> return the value property
};
function generatePassword(passwordLength, confirmUppercase, confirmLowercase, confirmNumeric, confirmSpecial){
  var totalCharacters = ""; //create an empty string, since we don't know what user's selection is going to be
  if (confirmUppercase){ //if confirm_uppercase is true
    totalCharacters += uppercase;   //add uppercase into totalCharacters' string
  }
  if (confirmLowercase){
    totalCharacters += lowercase;
  }
  if (confirmNumeric){
    totalCharacters += numeric;
  }
  if (confirmSpecial){
    totalCharacters += specialCh;
  }

  var password = "";
  for (i=0; i<=passwordLength; i++){ //create loop to generate one character at a time
    var index = Math.floor(Math.random()*totalCharacters.length);//randomly generate password within the character string
    var character = totalCharacters[index];
    password += character;//password = password + character
  };
  return password;
}
//outcome of user's selections
function afterPasswordButtonClick(){
  var passwordLength = howMany(); //return number
  var confirmUppercase = upperCase(); //return boolean
  var confirmLowercase = lowerCase(); //return boolean
  var confirmNumeric = numericNum(); //return boolean
  var confirmSpecial = special(); //return boolean

  //measure if user clicked at least one of the character type
  if (confirmUppercase || confirmLowercase || confirmNumeric || confirmSpecial == true){
  } else {
    alert("At lease one of the character type must be selected.");
    return;
  }
  var password = generatePassword(passwordLength, confirmUppercase, confirmLowercase, confirmNumeric, confirmSpecial);
  writePassword(password);

  //user choose the password length
  function howMany() {
    var selectLength = prompt("How many characters would you like your password to contain?"); //set lengthSelected=0 right at the beginning when user hasn't selected the length of the pw
    if (selectLength < 8){
      alert("Password length must be at least 8 characters.");
      return howMany();
    }else if (selectLength > 128){
      alert("Password length must be no more than 128 characters.")
      return howMany();
    }else {
      return selectLength;
    }
  };
  //user confirm whether or not to include uppercase 
  function upperCase() {
    var confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
    if (confirmUppercase == true) {  //get a Boolean result using confirm method
      return confirmUppercase;
    }
  };
  //user confirm whether or not to include lowercase 
  function lowerCase() {
    var confirmLowercase = confirm("Click OK to confirm including lowercase characters.");
    if (confirmLowercase == true) {  //get a Boolean result using confirm method
      return confirmLowercase;
    }
  };
  //user confirm whether or not to include numeric 
  function numericNum() {
    var confirmNumeric = confirm("Click OK to confirm including numeric numbers.");
    if (confirmNumeric == true) {  //get a Boolean result using confirm method
      return confirmNumeric;
    }
  };
  //user confirm whether or not to include special characters 
  function special() {
    var confirmSpecial = confirm("Click OK to confirm including special characters.");
    if (confirmSpecial == true) {  //get a Boolean result using confirm method
      return confirmSpecial;
    }
  };
}
// Add event listener to generate button
generateBtn.addEventListener("click", afterPasswordButtonClick);










/* pseudocode
1. create record for passwordLength selection
2. create record for lowercase selection
3. create record for uppercase selection
4. create record for special character selection
5. create prompt1  for the length of the pw that allows user to choose the length 8=<x=<128
  -if x <= 8, alert "must be at least 8"
  -if x >= 128, alert "must be no more than 128"
  -if x is within 8 and 128, store the selected result
  -if x is <= 8 and x>=128, the function exit
6. create confirm1 for user to whether to include uppercase
  -if user clicks ok, it returns true
    -make a note on the result
    -move on to the lowercase question
  -if user clicks cancel, it returns false
    -move on to the lowercase question
7. create confirm2 for user to whether to include lowercase
  -if user clicks ok, it returns true
    -make a note on the result
    -move on to the numeric question
  -if user clicks cancel, it returns false
    -move on to the numeric question
8. create confirm3 for user to whether to include numeric numbers
  -if user clicks ok, it returns true
    -make a note on the result
    -move on to the special characters question
  -if user clicks cancel, it returns false
9.check if at least one character type (at least one true is returned) is selected
10. if not , prompt "at least one character type must be selected"
11. if yes (meaning when all prompts are answered), the pw is randomly generated
  -first character of pw is generated randomly
  -second character of pw is generated randomly
  -repeat the step/s until it reaches the length of the password
12. displays the password generated by the generator
*/