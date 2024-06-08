//ask the user for a number. 
//convert the input into a number. 
//square the number and store the number. 
//report result to the user. 

import readline from "readline-sync";
const enteredNumber =  readline.questionInt("Please enter a number ");
console.log ("The input number is " + enteredNumber);
const squaredNumber= enteredNumber * enteredNumber;
console.log("The squared number is ", squaredNumber);


console.log("Goodbye. ");