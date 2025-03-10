// node-calculator

var rs = require('readline-sync');

// -- Ask the user, "What operation would you like to perform?"
// -- Then the user enters one of these options: "/" "*" "-" "+"
// -- If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// -- After the user enters a valid operation, ask the user, "Please enter the first number"
// -- The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// -- After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// -- Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

var answer = [];
var operator = [];
var num1 = [];
var num2 = [];

// ------ Functions
const add = (num1, num2) => { return Number(num1) + Number(num2) }
const subtract = (num1, num2) => { return Number(num1) - Number(num2) }
const multiple = (num1, num2) => { return Number(num1) * Number(num2) }
const remainder = (num1, num2) => { 
  var remainders = num1 % num2;
  var quotient = Math.floor(num1 / num2);
  console.log('Quotient: ' + quotient + ', Remainder: ' + remainders);
 }
const divide = (num1, num2) => { 
  if (Number(num2) === 0) {
    console.log("Dividing by zero is considered undefined");
    getSecNum();
  } else if (num1 / num2 !== 0) {
    remainder;
  }
  return Number(num1) / Number(num2);
}

function method(task) {
  task = rs.question(userName + ', what operation would you like to perform? ');
  if (task == "+") {
    operator.push(task)
  } else if (task == "-") {
    operator.push(task)
  } else if (task == "*") {
    operator.push(task)
  } else if (task == "/") {
    operator.push(task)
  } else if (task == "%") {
    operator.push(task)
  } else {
    console.log(" -- That is not a valid operation, only +, -, *, /, % are allowed");
    method();
  }
}

function getFirstNum() {
  stNum = rs.question(userName + ', what\'s your first number? ');
  if (isNumber(stNum)) {
    num1.push(stNum);
  } else if (!isNumber(stNum)) {
    console.log("-- The input is not a valid number.");
    getFirstNum();
  }
}

function getSecNum() {
  ndNum = rs.question(userName + ', what\'s your second number? ');
  if (isNumber(ndNum)) {
    num2.push(ndNum);
  } else if (!isNumber(ndNum)) {
    console.log("-- The input is not a valid number.");
    getSecNum();
  }
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

const solution = (operator, num1, num2) => {
  if (operator == "+") {
    const result = add(num1, num2);
    answer.push(result);
    console.log("Your answer is: " + answer)
  } else if (operator == "-") {
    const result = subtract(num1, num2);
    answer.push(result);
    console.log("Your answer is: " + answer)
  } else if (operator == "*") {
    const result = multiple(num1, num2);
    answer.push(result);
    console.log("Your answer is: " + answer)
  } else if (operator == "/") {
    const result = divide(num1, num2);
    answer.push(result);
    console.log("Your answer is: " + answer)
  } else if (operator == "%") {
    const result = remainder(num1, num2);
  }
}

const reAnswer = (answer) => {
  answer.pop(); // Reset the answer
  return answer;
}
const reOper = (operator) => {
  operator.pop(); // Reset the operator
  return operator;
}
const reNum1 = (num1) => {
  num1.pop(); // Reset the num1
  return num1;
}
const reNum2 = (num2) => {
  num2.pop(); // Reset the num2
  return num2;
}

function isFinished() {
  finished = rs.keyInYN('-- Are you finished? ')
  if (finished === false) {
    reAnswer(answer);
    reOper(operator);
    reNum1(num1);
    reNum2(num2);
    method();
    console.log("-- Your operator : " + operator)
    
    getFirstNum();
    console.log("-- Your equation looks like : " + num1 + " " + operator + " NEXT = Answer")
    
    getSecNum();
    console.log("-- Your equation looks like : " + num1 + " " + operator + " " + num2 + " = Answer")
    
    solution(operator, num1, num2)
    
    isFinished();
  } else if (finished === true) {
    console.log('On to the next!')
  }
}


// ------   Operation begins here

var userName = rs.question('-- What is your name? ');

method();
console.log("-- Your operator : " + operator)

getFirstNum();
console.log("-- Your equation looks like : " + num1 + " " + operator + " NEXT = Answer")

getSecNum();
console.log("-- Your equation looks like : " + num1 + " " + operator + " " + num2 + " = Answer")

solution(operator, num1, num2)

isFinished()







// ------ start of optional







var yourAnswer = []; 
var finished = false;

function calculate(work) {
  var work = rs.question('-- ' + userName + '  What equation can I solve for you? ')
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

var userName = rs.question('-- What is your name? ');
var disclaimer = rs.keyInYN('-- ' + userName + ', please only include a space before and after your operator. ')

calculate();
console.log('This is your answer : ' + yourAnswer)

isFinishedAdv();