//This import statement makes the readline-sync utility library available for later use.
import readline from "readline-sync";

const animalsArray = ["Lion", "Elephant", "Crocodile", "Penguin"];

const animalIndex = readline.keyInSelect(animalsArray, "Pick an animal?");
//animalIndex will be 0 to 3, or -1 if the user chose to cancel.
if (animalIndex !== -1) {
    const chosenAnimal = animalsArray[animalIndex];
    console.log("animal index: ", animalIndex);
    console.log("You chose: ", chosenAnimal);
    console.log("Backwards, that is: ", reverseString(chosenAnimal));
}

/**
 * This function returns a reversed version of a given string.
 * Don't worry about how it works, for now.
 * @param {string} inputString
 * @returns {string} reversed version of the inputString
 */
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}
