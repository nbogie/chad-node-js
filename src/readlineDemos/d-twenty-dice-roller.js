// input a number for a successful roll.
//ask the user for the max number to be generated randomly.
//ask the user if any bonuses are added to the generated number .
//report whether the number is a successful hit or not.
//if successful, ask the user for a number to be randomly generated for damage.

import readline from "readline-sync";

const succeedingRoll = readline.questionInt("What is the roll to hit ? ");

const toHit = readline.questionInt("Roll to hit. ");
console.log("The result of the die rolled is...  " + toHit);

const dieRolled = rollDie(toHit);
console.log("Rolled Outcome" + dieRolled);

const bonusToAdd = readline.questionInt("Add any bonus to the roll. ");

const modifiedRoll = dieRolled + bonusToAdd;
console.log("The modified roll is " + modifiedRoll);

if (succeedingRoll <= modifiedRoll) {
    console.log("Successful hit! Rolling for damage.");
    const dieToRollDamage = readline.questionInt(
        "What is the die to roll for damage? ",
    );
    const rollForDamage = rollDie(dieToRollDamage);
    console.log("The damage inflicted is" + rollForDamage);
} else {
    console.log("Failed hit! ");
}

function 
rollDie(numFaces) {
    return Math.ceil(numFaces * Math.random());
}
