const valor = require('./temperatura');

const celsius = valor.CelsiusParaFah(20);

const fahrenheit = valor.FahParaKelvin(68);

const kelvin = valor.KelvinParaCelsius(293.15)

console.log("20°C = " , celsius , "°F");

console.log("68°F = " , fahrenheit , "K");

console.log("293.15K = " , kelvin , "°C")


