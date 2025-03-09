// node-calculator

var rs = require('readline-sync');

// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result














var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many more hobbies do you have? ');
}

function addHobbies(numHobbies) {
  var counter = 0;
  while(counter < numHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;

    if (counter < numHobbies) {
      console.log('-- Awesome! "' + input + '" is cool! What\'s the other ' + (numHobbies - counter) + '?');
    } else {
      console.log('I wish I could do ' + hobbies + '...but I\'m not even real.')
    }
  }
}

var userName = rs.question('What is your name? ');
var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);
getHobbyCount();


if (moreHobbies > 0) {
  console.log('Cool, what are they? ')
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you like to do? ');
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log('Cool, what are they? ')
  addHobbies(moreHobbies);
} else if (areYouSure) {
  console.log(hobbies + ' is cool, good for you.')
}