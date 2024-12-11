/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Joaquín";

if (myName == "Joaquín") console.log("Tu nombre es Joaquín");
else console.log("Tu nombre es OTRO");

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "admin";
let pass = "1234";

if (user == "admin" && pass == "1234") console.log("Identificación correcta");
else console.log("Identificación incorrecta");

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let myNum = 23;

if (myNum > 0) console.log("El número es positivo");
else if (myNum < 0) console.log("El número es negativo");
else console.log("El número es cero");

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadVotar = 15;

if (edadVotar >= 18) {
  console.log("La persona es mayor de edad y puede votar");
} else {
  console.log(
    `La persona no puede votar y le faltan ${
      18 - edadVotar
    } años para poder votar`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let elValor = 7 >= 18 ? "adulto" : "menor";

console.log(elValor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2;

if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
  console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Verano");
} else {
  console.log("otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("El mes tiene 31 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("El mes tiene 30 días");
    break;
  case 2:
    console.log("El mes tiene 28 o 29 días");
    break;
  default:
    console.log("Mes incorrecto");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let languaje = "español";

switch (languaje) {
  case "español":
    console.log("Buenos días");
    break;
  case "english":
    console.log("Good morning");
    break;
  default:
    console.log("jaja xd");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 3:
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
