// Assignment Code
var generateBtn = document.querySelector("#generate");  //this will generate button every time (point to the first element in the document)
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // using backslash escape character to treat " specially 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //.value -> return the value property

}


//if user choose the password length
function howMany() {
  var lengthSelected = prompt("How many characters would you like your password to contain?"); //set lengthSelected=0 right at the beginning when user hasn't selected the length of the pw
  if (lengthSelected >=8 || lengthSelected <=128 ){
    //uppercase();
    return lengthSelected;
  }else if (lengthSelected < 8){
    alert("Password length must be at least 8 characters.");
    return howMany();
  }else if (lengthSelected > 128){
    alert("Password length must be no more than 128 characters.")
    return howMany();
  }
};
  
  
  
  /*if (lengthSelected < 8) {
    alert("Password length must be at least 8 characters.");
    return howMany();
  } else if (lengthSelected >= 128) {
    alert("Password length must be no more than 128 characters.")
    return howMany();
  } else {
    uppercase();
    return lengthSelected; //store the selected length to the variable lengthSelected
  }
};*/

//if user confirm whether or not to include uppercase 
function uppercase() {
  var uppercaseConfirmed = confirm("Click OK to confirm including lowercase characters.");
    if (uppercaseConfirmed == true) {  //get a Boolean result using confirm method
      lowercase();
      return uppercaseConfirmed;
    } else {
      return uppercase();
  }
};

//if user confirm whether or not to include lowercase 
function lowercase(selectLowercase) {
  var lowercaseConfirmed = confirm("Click OK to confirm including lowercase characters.");
  if (lowercase == true) {  //get a Boolean result using confirm method
    return lowercaseConfirmed;
  }
};
//if user confirm whether or not to include numeric 
function numeric(selectNumeric) {
  var numericConfirmed = confirm("Click OK to confirm including numeric numbers.");
  if (numeric == true) {  //get a Boolean result using confirm method
    return numericConfirmed;
  }
};
//if user confirm whether or not to include special characters 
function special(selectSpecial) {
  var specialConfirmed = confirm("Click OK to confirm including special characters.");
  if (special == true) {  //get a Boolean result using confirm method
    return specialConfirmed;
  }
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
howMany();
/* pseudocode
1. create record for passwordLength selection
2. create record for lowercase selection
3. create record for uppercase selection
4. create record for special character selection
5. create prompt1  for the length of the pw that allows user to choose the length 8=<x=<128
  -if x <= 8, alert "must be at least 8"
  -if x >= 128, alert "must be no more than 128"
  -if x is within 8 and 128, store the selected result
6. create prompt2for character types giving a choice of including lowercase, uppercase, numeric, and/or special characters
7.check to see if at least one character type is selected
8. if not , return to the missing question that hasn't been answered
9. if yes (meaning when all prompts are answered), the pw is generated
10. alert that displays the password generated by the system
*/

