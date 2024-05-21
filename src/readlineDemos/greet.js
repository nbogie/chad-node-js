//This import statement makes the readline-sync utility library available for later use.
import readline from "readline-sync";
const responseName = readline.question("Who are you?");
console.log("Hello, ", responseName);
