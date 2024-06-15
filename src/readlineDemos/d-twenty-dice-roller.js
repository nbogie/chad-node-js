//ask the dm for the number of dice to be rolled. Can be anywhere between 2 to 100.
//Report the value to the dm .
//Ask the dm if there are any bonuses to the roll.
//report result to the dm .
// Ask the dm the roll for success.
// if the opposing force is an attacker, make a random roll with a d20.
// If the first roll is greater than the second roll, ask the dm the damage to be applied to the attack.
//This damaged roll can either be a fixed number or a random roll.

import readline from "readline-sync";
const dieToRoll = readline.questionInt("What die? ");
console.log("The input number is " + dieToRoll);
// generate a number between 1 and dieToRoll
const dieRolled = Math.ceil(dieToRoll * Math.random());
console.log("Rolled Outcome" + dieRolled);
const bonusToAdd = readline.questionInt("Are there bonuses to add? ");
const modifiedRoll = dieRolled + bonusToAdd;
console.log("The modified roll is " + modifiedRoll);
