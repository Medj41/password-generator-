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
    return ;
  };


  var inputResult = {
    numberOfCha: numberOfCharacters,
    special: confirm('Click ok to confirm including special characters'),
    num: confirm('Click ok to confirm including numeric characters'),
    upper: confirm('Click ok to confirm including UpperCase characters'),
    lower: confirm('Click ok to confirm including LowerCase characters'),

  };

  if (!inputResult) {
    alert('PassWord must contain at lease one Characters, Please try again');
    return ;
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
      for (let i = 0; i < specialCharacters.length; i++) {
        pwOutput.randomSpecial += specialCharacters[i];      
      };
    };

    if (inputResult.num === true) {
      for (let i = 0; i < numericCharacters.length; i++) {
        pwOutput.randomNum += numericCharacters[i];      
      };  
    };

    if (inputResult.upper === true) {
      for (let i = 0; i < upperCasedCharacters.length; i++) {
        pwOutput.randomUpper += upperCasedCharacters[i];      
      };
    };

    if (inputResult.lower === true) {
      for (let i = 0; i < lowerCasedCharacters.length; i++) {
        pwOutput.randomLower += lowerCasedCharacters[i];      
      };
    };



    let merged = pwOutput.randomUpper +  pwOutput.randomLower +  pwOutput.randomSpecial  + pwOutput.randomNum;

  

    // console.log(merged.split(','));
    let newPassWord = '';
    for (let i = 0; i < inputResult.numberOfCha; i++) {
      newPassWord += merged[Math.floor(Math.random() * merged.length)];
      // console.log(newPassWord);
    }

    console.log(newPassWord.length);
    return newPassWord;


  // let pwOutPut = [''];

  // if (inputResult.special === true) {
  //   pwOutPut[0] = specialCharacters;

  // };
  // if (inputResult.num === true) {
  //   pwOutPut[1] = numericCharacters;

  // };
  // if (inputResult.upper === true) {
  //   pwOutPut[2] = upperCasedCharacters;

  // };
  // if (inputResult.lower === true) {
  //   pwOutPut[3] = lowerCasedCharacters;

  // };
  // console.log(pwOutPut);


  // let randomNum = '';
  // for (let i = 0; i < inputResult.numberOfCha; i++) {
  //     const randomNum = pwOutPut[i][0][Math.floor(Math.random() * pwOutPut[i][0].length)];
  //     console.log(randomNum);
    
  // }
 
  // return randomNum;
};


// console.log(getRandom(inputResult));






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