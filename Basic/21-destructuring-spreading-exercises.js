/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

let myArray = [1, 2, 3, 4];

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let [elementoUno, elementoDos] = myArray;

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [
  primerElemento,
  segundoElemento,
  tercerElemento,
  cuartoElemento = "Elemento por defecto",
] = myArray;

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let [, unEle, , dosEle] = myArray;

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let [ej4_1, ej4_2, ,] = myArray;

let otroNombre1 = ej4_1;

let otroNombre2 = ej4_2;

console.log(otroNombre1); //Imprime 1

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona = {
  nombre: "Joaquin",
  apellido: "Gutierrez",
  edad: 37,
  oficio: {
    nombre: "Policia",
    años_experiencia: 10,
  },
};

let { nombre: elNombre, años_experiencia } = persona.oficio;

console.log(elNombre);
console.log(años_experiencia);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let arrayUno = [1,2,3];
let arrayDos = [4,5,6];

let arrayPropagado = [...arrayUno, ...arrayDos];

console.log(arrayPropagado)

// 7. Usa propagación para crear una copia de un array

let arrayOriginal = [1,2,3,4,5,6]
let arrayCopia = [...arrayOriginal]
console.log(arrayCopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objetoUno = {
  nombre: "Joaquin",
  edad: 37
}

let objetoDos = {
  profesión: "Policía",
  estudios: "informático"
}

let objetoFinal = {...objetoUno, ...objetoDos}

console.log(objetoFinal)

// 9. Usa propagación para crear una copia de un objeto

let objetoOriginal = {
  nombre: "Joaquin",
  edad: 37,
  profesión: "Policía",
  estudios: "Ingeniero en Informática"
}

let objetoCopia = {...objetoOriginal}
console.log(objetoCopia)

// 10. Combina desestructuración y propagación

let arrayFinal1 = [1,2,3,4,5,6]
let arrayFinal2 = ["a","b","c","d"]

let 

