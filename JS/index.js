// node-calculator

//  Ask the user, "What operation would you like to perform?"
//  Then the user enters one of these options: "/" "*" "-" "+"
//  If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
//  After the user enters a valid operation, ask the user, "Please enter the first number"
//  The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
//  After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
//  Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

let rs = require('readline-sync');

//  why array
// -- [Explained in reasoning.txt]
//  clean-up and adjust method()
// -- [getOperator()]
//  adjust getFistNum() & getSecNum()
// -- [attempted reference it works but fails when receiving a letter, due to how they check then push to different points each one needs to be written or they can't check and push]
// -- [loom8:30, mention of reusability. My divide also references my second grab which I wasn't able to replicate with the single getValidNum() or recommended()]
//  adjust solution()
// -- [if...else chain --> switch]
//  adjust various reset functions
// -- [reset()]

let finished = false;
let operator = [];
let num1 = [];
let num2 = [];

// ------ FunctionsAddOns
const add = (num1, num2) => { 
  let added = Number(num1) + Number(num2);
  console.log("Your answer is: " + added)
}
const subtract = (num1, num2) => { 
  let subtracted = Number(num1) - Number(num2);
  console.log("Your answer is: " + subtracted)
}
const multiply = (num1, num2) => { 
  let multiplied = Number(num1) * Number(num2);
  console.log("Your answer is: " + multiplied)
}
const remainder = (num1, num2) => { 
  let remainders = Number(num1) % Number(num2);
  let quotient = Math.floor(num1 / num2);
  console.log('Quotient: ' + quotient + ', Remainder: ' + remainders);
 }
const divide = (num1, num2) => { 
  if (Number(num2) === 0) {
    console.log("Dividing by zero is considered undefined");
    num2.pop();
    grabNum2();
  } else if (num1 % num2 !== 0) {
    remainder(num1, num2);
  }
  let divided = Number(num1) / Number(num2);
  console.log("Your answer is: " + divided)
}

function isNumber(input) {
  if (typeof input !== 'string') {
    return false; 
  }
  if (input.trim() === '') {
    return false;
  }
  if (!isNaN(input) && !isNaN(parseFloat(input))) {
    return true;
  } else {
    return false;
  }
}

// ------ Functions
function getOperator(task) {
  task = rs.question(userName + ', what operation would you like to perform? ');
  if (task == "+" || task == "-" || task == "*" || task == "/" || task == "%" ) {
    operator.push(task)
  } else {
    console.log(" -- That is not a valid operation, only +, -, *, /, % are allowed");
    getOperator();
  }
}

// * fails on letter. | to run uncomment recommended() line 175 & 196 while commenting 176|177 & 197|198
function recommended() {
  function grabNumbers(prompt) {
    const num = rs.question(userName + prompt);
    if (!isNumber(num)) {
      console.log("-- The input is not a valid number.");
      grabNumbers(prompt);
    } else {
      return num;
    }
  }  
  num1.push(grabNumbers(', what\'s your first number? '));
  num2.push(grabNumbers(', what\'s your second number? '));
}
// * fails on letter. | to run uncomment recommended() line 175 & 196 while commenting 176|177 & 197|198

function grabNum1() {
  const stNum = rs.question(userName + ', what\'s your first number? ');
  if (!isNumber(stNum)) {
    console.log("-- The input is not a valid number.");
    grabNum1();
  } else {
    num1.push(stNum);
  }
}  

function grabNum2() {
  const ndNum = rs.question(userName + ', what\'s your second number? ');
  if (!isNumber(ndNum)) {
    console.log("-- The input is not a valid number.");
    grabNum2();
  } else {
    num2.push(ndNum);
  }
}  

function solution(operator, num1, num2) {
  switch (true) {
    case (operator == '+'):
      add(num1, num2);
      break;
    case (operator == '-'):
      subtract(num1, num2);
      break;
    case (operator == '*'):
      multiply(num1, num2);
      break;
    case (operator == '/'):
      divide(num1, num2);
      break;
    case (operator == '%'):
      remainder(num1, num2);
      break;
    default:
      console.log("Some error occurred!");
  }

  // if (operator == "+") {
  //   add(num1, num2);
  // } else if (operator == "-") {
  //   subtract(num1, num2);
  // } else if (operator == "*") {
  //   multiply(num1, num2);
  // } else if (operator == "/") {
  //   divide(num1, num2);
  // } else if (operator == "%") {
  //   remainder(num1, num2);
  // }
}

const reset = (itemNew) => {
  while (itemNew.length > 0) {
    itemNew.pop();
  }
  return itemNew;
}


function isFinished() {
  finished = rs.keyInYN('-- Are you finished? ')
  if (finished === false) {
    reset(operator);
    reset(num1);
    reset(num2);
    getOperator();
    console.log("-- Your operator : " + operator)
    
    // recommended() 
    grabNum1()
    grabNum2()
    console.log("-- Working with : " + num1 + " " + operator + " " + num2 + " = Answer")

    solution(operator, num1, num2);
    
    isFinished();
  } else if (finished === true) {
    console.log('Opening -- Equation Calculator')
  }
}


// ------   Operation begins here

let userName = rs.question('-- What is your name? ');

getOperator();
console.log("-- Your operator : " + operator)

// recommended();
grabNum1();
grabNum2();
console.log("-- Working with : " + num1 + " " + operator + " " + num2 + " = Answer")

solution(operator, num1, num2);

isFinished();







// ------ start of optional







let yourAnswer = []; 

function calculate(work) {
  work = rs.question('-- ' + userName + '  What equation can I solve for you? ')
  const operators = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    '%': (num1, num2) => num1 % num2
  };

  const secs = work.split(' ');
  const numbers = [];
  const ops = [];

  secs.forEach((sec) => {
    if (!isNaN(sec)) {
      numbers.push(parseFloat(sec));
    } else if (operators[sec]) {
      ops.push(sec);
    }
  });

  while (ops.length) {
    const operator = ops.shift();
    const num2 = numbers.pop();
    const num1 = numbers.pop();
    const result = operators[operator](num1, num2);
    numbers.push(result);
  }
  if (numbers[0] === undefined) {
    calculate();
  }
  yourAnswer.push(numbers[0]);
}

const resetAdv = (array) => {
  array.pop(); // Reset the array
  return array;
}

function isFinishedAdv() {
  finished = rs.keyInYN('-- Are you finished? ')
  if (finished === false) {
    resetAdv(yourAnswer);
    calculate();
    console.log('This is your answer : ' + yourAnswer)
    isFinishedAdv();
  } else if (finished === true) {
    console.log('Thank you for visiting!')
  }
}


// ------   Operation begins here

disclaimer = rs.keyInYN('-- ' + userName + ', please only include a space before and after your operator. ');

calculate();
console.log('This is your answer : ' + yourAnswer)

isFinishedAdv();