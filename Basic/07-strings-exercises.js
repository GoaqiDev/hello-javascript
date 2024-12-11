/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

let cadUno = "Primera Cadena";
let cadDos = "Segunda Cadena";

// 1. Concatena dos cadenas de texto

let concate = cadUno + cadDos;

// 2. Muestra la longitud de una cadena de texto

console.log(cadUno.length);

// 3. Muestra el primer y último carácter de un string

console.log(cadUno.charAt(0));
console.log(cadUno.charAt(cadUno.length-1));

// 4. Convierte a mayúsculas y minúsculas un string

cadDos.toUpperCase();
cadDos.toLowerCase();

// 5. Crea una cadena de texto en varias líneas

let varias = `cadena
de texto
en varias
lineas`;

// 6. Interpola el valor de una variable en un string

let interpolacion = `Esta es la interpolación de ${cadDos}`;
console.log(interpolacion);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let reemplaza = cadUno.replaceAll(" ", "-");
console.log(reemplaza);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadDos.search("Cadena"));

// 9. Comprueba si dos strings son iguales

console.log(cadUno.localeCompare(cadDos));

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadUno == cadDos);