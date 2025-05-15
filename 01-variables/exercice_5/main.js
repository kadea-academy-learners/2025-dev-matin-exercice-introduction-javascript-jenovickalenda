// ecrire le code de conversion ici
let celsius = 25;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  // Formule : (°C × 9/5) + 32 = °F
  let fahrenheit = (celsius * 9/5) + 32;
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
}
console.log(celsiusToFahrenheit(celsius));
// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
