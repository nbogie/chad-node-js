//This import statement makes the readline-sync utility library available for later use.
import readline from "readline-sync";

const optionsObject = {
    limit: ["beef", "chicken"],
};

const chosenMeal = readline.question("Beef or Chicken? ", optionsObject);

console.log("You chose ", chosenMeal);
