//ask the dm for the number of dice to be rolled. Can be anywhere between 2 to 100.  
//Report the value to the dm . 
//Ask the dm if there are any bonuses to the roll. 
//report result to the dm . 
// Ask the dm the roll for success. 
// if the opposing force is an attacker, make a random roll with a d20. 
// If the first roll is greater than the second roll, ask the dm the damage to be applied to the attack. 
 //This damaged roll can either be a fixed number or a random roll. 

import readline from "readline-sync";
const rolledValue =  readline.questionInt("Please enter a number ");
console.log ("The input number is " + enteredNumber);
const squaredNumber= enteredNumber * enteredNumber;
console.log("The squared number is ", squaredNumber);


console.log("Goodbye. ");