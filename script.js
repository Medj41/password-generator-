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
  let numberOfCharacters = prompt('Enter number of characters you wish to generate');


  if (numberOfCharacters < 8 || numberOfCharacters > 128) {

    alert('Password length should be between 8 and 128');
    getPasswordOptions();
  };

  let speCharacter = confirm('Click ok to confirm including special characters');

  if (!speCharacter) {
    alert('PassWord must contain special Characters, Please try again');
    getPasswordOptions();
  };

  var inputResult = {
    numberOfCha: numberOfCharacters,
    special: speCharacter,
    num: confirm('Click ok to confirm including numeric characters'),
    upper: confirm('Click ok to confirm including upperCase characters'),
    lower: confirm('Click ok to confirm including LowerCase characters'),

  };



  console.log(inputResult.numberOfCha);
  return inputResult;
};

var inputResult = getPasswordOptions();

console.log(inputResult);





// Function for getting a random element from an array
function getRandom(arr) {

  let pwOutput = {
    numberOfCha: '',
    randomUpper: '',
    randomSpecial: '',
    randomNum: '',
    randomLower: ''

  };
  if (inputResult.special === true) {
    pwOutput.randomSpecial = specialCharacters;

  };
  if (inputResult.num === true) {
    pwOutput.randomNum = numericCharacters;

  };
  if (inputResult.upper === true) {
    pwOutput.randomUpper = upperCasedCharacters;

  };
  if (inputResult.lower === true) {
    pwOutput.randomLower = lowerCasedCharacters;

  };



  let merged = pwOutput.randomUpper + pwOutput.randomLower + pwOutput.randomSpecial + pwOutput.randomNum;



  console.log(merged);
  let newPassWord = '';
  for (let i = 0; i < inputResult.numberOfCha; i++) {
    newPassWord += merged[Math.floor(Math.random() * merged.length)];
    console.log(newPassWord);
  }

  console.log(newPassWord.length);
  return newPassWord;

};


console.log(getRandom(inputResult));






// Function to generate password with user input
function generatePassword() {

  var generatedPW = '';


  generatedPW = getRandom();
  return generatedPW;


};


















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