/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch

let myObject1

try {
    console.log(myObject.age)
} catch (error){
    console.log("Error capturado: ", error)
}

// 2. Captura una excepción utilizando try-catch y finally

let myObject2

try {
    console.log(myObject2.age)
} catch (error){
    console.log("Error capturado: ", error)
} finally {
    console.log("El objeto no tiene parámetros")
}

// 3. Lanza una excepción genérica

//throw new Error(console.log("Excepción genérica"))

// 4. Crea una excepción personalizada

class MyException extends Error{
    constructor(message){
        super(message)
        this.name = "Custom Exception"
    }
}

try{
    throw new MyException("Este es el error lanzado")
} catch (error){
    console.log("Error en el catch: ", error.name)
    console.log("Error en el catch: ", error.message)
}

// 5. Lanza una excepción personalizada

class MiErrorPersonalizado extends Error {
    constructor(message) {
        super(message);
        this.name = "MiErrorPersonalizado";
    }
}

function verificaEdad(edad) {
    if (edad < 18) {
        throw new MiErrorPersonalizado("Debes tener al menos 18 años para continuar.");
    }
    return "Acceso permitido.";
}

// Ejemplo de uso:
try {
    console.log(verificaEdad(16)); // Esto lanzará la excepción
} catch (error) {
    console.log(error.name); // "MiErrorPersonalizado"
    console.log(error.message); // "Debes tener al menos 18 años para continuar."
}


// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function repe(){
    
}