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
let usuarios = []; // Array que guardará cada nombre de los usuarios

function validadorNombres() {
    let nombre = prompt("Ingrese el nombre de usuarios");
    nombre = nombre.trim(); // Elimina los espacios antes y después del texto.
    if (nombre != "") {
        usuarios.push(nombre);
        alert(`${nombre} ha sido agregado correctamente.`);
        alert(`Usuarios agregados: ${usuarios.join(", ")}`);
    } else {
        alert("Error: el nombre no puede estar en blanco.");
    };
};

// Ejercicio 03: El Filtro de Duplicados
/* Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
- Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
- Si ya existe, muestra: "El producto ya está en el inventario".*/
let productos = ["celular", "teclado", "mouse"];
let filtro = false;

function filtroDuplicado() {
    let nuevoProducto = prompt("Ingrese un nuevo producto: ");
    nuevoProducto = nuevoProducto.trim();
    for (let i = 0; i < productos.length; i++) {
        if (nuevoProducto.includes(productos[i])) {
            filtro = true;
        };
    };
    if (filtro === false) {
        productos.push(nuevoProducto);
        alert(`El producto fue agregado correctamente.`);
    } else {
        alert("El producto ya está en el inventario.");
    };

    filtro = false;
    alert(`Lista de productos: ${productos.join(", ")}`);
};