/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class PrimerEjercicio {
  #nombre;
  #apellido;

  constructor(nombre, apellido) {
    this.#nombre = nombre;
    this.#apellido = apellido;
  }

  get nombre() {
    return this.#nombre;
  }

  get apellido() {
    return this.#apellido;
  }

  set nombre(newNombre) {
    this.#nombre = newNombre;
  }

  set apellido(newApellido) {
    this.#apellido = newApellido;
  }

  //Solución del ejercicio 4
  static funcionEstatica() {
    console.log("Esto es una función estática");
  }

  // 2. Añade un método a la clase que utilice las propiedades

  imprime() {
    console.log(this.#nombre + " " + this.#apellido);
  }
}

let person = new PrimerEjercicio("Joaquín", "Gutiérrez");
// 3. Muestra los valores de las propiedades e invoca a la función

person.imprime();

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

PrimerEjercicio.funcionEstatica();

// 6. Crea una clase que haga uso de herencia

class OtraClase extends PrimerEjercicio {
  constructor(oficio, edad) {
    this.oficio = oficio;
    this.edad = edad;
  }
}

// 7. Crea una clase que haga uso de getters y setters

class ClaseSiete {
  #ejemplo;

  constructor(ejemplo) {
    this.#ejemplo = ejemplo;
  }

  get ejemplo() {
    return this.#ejemplo;
  }

  set ejemplo(newEjemplo) {
    this.#ejemplo = newEjemplo;
  }

  RenuevaEjemplo(newEj) {
    ejemplo(newEj);
  }
}

const eJ = new ClaseSiete("Antonio");

console.log(eJ.ejemplo);
eJ.ejemplo = "Joaquin";
console.log(eJ.ejemplo);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia
