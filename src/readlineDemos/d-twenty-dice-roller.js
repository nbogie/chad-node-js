// generate a number for a successful roll.
//ask the user for the max number to be generated randomly.
//ask the user if any bonuses are added to the generated number .
//report whether the number is a successful hit or not.

import readline from "readline-sync";

const succeedingRoll = readline.questionInt("What is the success to hit ? ");

const dieToRoll = readline.questionInt("What is the die to roll? ");
console.log("The input number is " + dieToRoll);

const dieRolled = Math.ceil(dieToRoll * Math.random());
console.log("Rolled Outcome" + dieRolled);

const bonusToAdd = readline.questionInt("Add any bonus to the roll. ");

const modifiedRoll = dieRolled + bonusToAdd;
console.log("The modified roll is " + modifiedRoll);

if (succeedingRoll <= modifiedRoll) {
    console.log("Successful hit! ");
} else {
    console.log("Failed hit! ");
}
