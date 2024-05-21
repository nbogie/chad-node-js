//This import statement makes the readline-sync utility library available for later use.
import readline from "readline-sync";

const temperatureInFahrenheitAsString = readline.question(
    "What temperature is it in fahrenheit? ",
);

const temperatureInFahrenheitAsNumber = parseInt(
    temperatureInFahrenheitAsString,
);

const temperatureInCelsius = convertTemperatureFromFahrenheitToCelsius(
    temperatureInFahrenheitAsNumber,
);

console.log(
    "The temperature ",
    temperatureInFahrenheitAsNumber,
    "degrees fahrenheit is equivalent to ",
    temperatureInCelsius,
    "degrees celsius",
);

/**
 *
 * @param {number} tempInFahrenheit
 * @returns {number} temperature in celsius
 */
function convertTemperatureFromFahrenheitToCelsius(tempInFahrenheit) {
    // Conversion formula: Celsius = (Fahrenheit - 32) * 5/9
    const exactTempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
    const roundedTempInCelsius = Math.round(exactTempInCelsius);
    return roundedTempInCelsius;
}
