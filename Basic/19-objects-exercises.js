/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let obj1 = {
    prop1: "Propiedad 1",
    prop2: "Propiedad 2",
    prop3: "Propiedad 3"
}

// 2. Accede y muestra su valor

console.log(obj1)
console.log(obj1.prop1)

// 3. Agrega una nueva propiedad
obj1.prop4 = "Propiedad 4"
console.log(obj1)

// 4. Elimina una de las 3 primeras propiedades
delete obj1.prop4
console.log(obj1)

// 5. Agrega una función e invócala
obj1.myFunc = function(){
    console.log("Función dentro del objeto")
}
console.log(obj1)

// 6. Itera las propiedades del objeto
for(let key in obj1){
    console.log(key)
}

// 7. Crea un objeto anidado
let objAnidado = {
    nombre: "Joaquin",
    edad: 37,
    objInterno: {
        trabajo: "Policía"
    }
}
console.log(objAnidado)

console.log(objAnidado.objInterno.trabajo)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objAnidado.objInterno.trabajo)

// 9. Comprueba si los dos objetos creados son iguales
console.log(objAnidado == objAnidado.objInterno)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objAnidado.nombre == objAnidado.objInterno.trabajo)