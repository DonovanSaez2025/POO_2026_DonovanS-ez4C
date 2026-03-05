console.log("Conectado a JS...");
const INVALIDO = "Error: ingrese valores válidos."; // Constante con un mensaje de error genérico.

// Ejercicio 01: El Portero Digital
/* Crea una variable edad. Si la edad es 18 o más, muestra por consola:
"Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".*/
function porteroDigital() {
    let edad = parseInt(prompt("Ingresa tu edad: "));
    if (edad >= 18) {
        alert("Acceso permitido a la App.");
    } else if (edad <= 17 && edad >= 1) {
        alert("Acceso denegado: necesitas ser mayor de edad.");
    } else {
        alert(INVALIDO);
    };
};

// Ejercicio 02: Validador de Nombres
// Declara una variable nombre.
/* Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".*/