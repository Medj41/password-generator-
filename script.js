// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let numberOfCharacters = prompt('Password length should be between 8 and 128') 
  if (numberOfCharacters < 8){
      alert('Not enough characters')
      prompt('Try agin')   
  } else if (numberOfCharacters > 128) {
    alert('Too many characters')
    prompt('Try agin')   
  };

  let userSpecialCharacters = confirm ('Click ok to confirm including special characters')



  let userNumericCharacters =  confirm ('Click ok to confirm including numeric characters')
  let userUpperCaseCharacters = confirm ('Click ok to confirm including upperCase characters')
  let userLowerCaseCharacters = confirm ('Click ok to confirm including LowerCase characters')


  let result = {
    numberOfCha: numberOfCharacters,
    special:userSpecialCharacters,
    num:userNumericCharacters,
    upper:userUpperCaseCharacters,
    lower:userLowerCaseCharacters
  }
  

  return;
};




let userchoices = getPasswordOptions();






// Function for getting a random element from an array
function getRandom(arr) {


  const randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  const randomNum = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];

  const randomUpper = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];

  const randomLower = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];


  pwTest = [randomUpper, randomSpecial, randomNum, randomLower ];
  console.log(pwTest);  
  return pwTest;
}







console.log(getRandom(getPasswordOptions()));




// Function to generate password with user input
function generatePassword() {



  
}


















// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);