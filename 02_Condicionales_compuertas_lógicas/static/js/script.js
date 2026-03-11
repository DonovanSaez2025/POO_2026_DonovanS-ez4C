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
    if (nuevoProducto == "") {
        alert(INVALIDO);
    } else if (filtro === false) {
        productos.push(nuevoProducto);
        alert(`El producto fue agregado correctamente.`);
        alert(`Lista de productos: ${productos.join(", ")}`);
    } else {
        alert("El producto ya está en el inventario.");
    };

    filtro = false;
};
// Ejercicio 04: Control de Stock Máximo
/* Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
- Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
- Si es 5 o menos, muestra: "Espacio disponible"*/
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];

function stockQuitar() {
    if (bodega.length > 2 || bodega.length == 1) {
        bodega.pop();
        alert(`Caja quitada correctamente, hay un total de ${bodega.length} cajas`);
    } else if (bodega.length == 2) {
        bodega.pop();
        alert(`Caja quitada correctamente, hay un total de ${bodega.length} caja`);
    } else if (bodega.length == 0) {
        alert("La bodega está vacía.")
    };
};

function controlStock() {
    if (bodega.length > 5) {
        alert("Bodega llena, retirando cajas sobrantes.")
        for (let i = 0; bodega.length > 5; i++) {
            bodega.pop();
        };
    } else if (bodega.length > 1 && bodega.length != 5 || bodega.length == 0) {
        alert(`Hay ${bodega.length} cajas en la bodega. Espacio disponible`);
    } else if (bodega.length == 1) {
        alert(`Hay ${bodega.length} caja en la bodega. Espacio disponible`);
    } else if (bodega.length == 5) {
        alert(`Hay ${bodega.length} caja en la bodega. La bodega está llena.`);
    };
};

function stockAgregar() {
    if (bodega.length < 5 && bodega.length != 0) {
        bodega.push(`caja${bodega.length + 1}`);
        alert(`Caja añadida correctamente, hay un total de ${bodega.length} cajas`);
    } else if (bodega.length == 0) {
        bodega.push(`caja${bodega.length + 1}`);
        alert(`Caja añadida correctamente, hay un total de ${bodega.length} caja`);
    } else if (bodega.length >= 5) {
        alert("La bodega está llena, no pueden añadirse más cajas.");
    };
};

// Ejercicio 05: Limpieza de Datos
/*A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
- Si el primer elemento (índice 0) es igual a "error_404", elimínalo usando .shift() y muestra la cola limpia.
- Si no, muestra: "La lista de espera está correcta".
*/
let colaEspera = ["error_404", "Juan", "Sofía"];

function limpiezaDatos() {
    if (colaEspera[0] == "error_404") {
        alert(`${colaEspera[0]} es un dato basura, eliminando de la lista.`)
        colaEspera.shift();
        alert(`Cola de espera limpia: ${colaEspera.join(", ")}`);
    } else if (colaEspera[0] != "error_404") {
        alert(`${colaEspera[0]} es un dato válido, devolviendo al inicio de la cola.`);
        colaEspera.push(colaEspera[0]);
        colaEspera.shift();
        alert(`Cola de espera: ${colaEspera.join(", ")}`);
    };
};

// Ejercicio 06: Acceso VIP
/*Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
- Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
- Si no es Admin, agrégalo al final con .push().*/
let foro = ["User1", "User2"];

function accesoVip() {
    let username = prompt("Ingresa tu nombre de usuario: ");
    let rol = prompt(`Ingresa tu rol:\nAdmin, Usuario`).toLowerCase();
    username = username.trim();
    rol = rol.trim();

    if (username == "" || rol == "") {
        alert(INVALIDO)
    } else if (rol == "admin") {
        foro.unshift(username);
        alert(`Admin agregado correctamente\n${foro.join(", ")}`)
    } else if (rol != "admin") {
        foro.push(username);
        alert(`Usuario agregado correctamente\n${foro.join(", ")}`);
    };
};

// Ejercicio 07: Sistema de Calificaciones Chile (Escala 1 a 7)
/*Crea una variable nota.
- Si la nota es 6 o superior: "Excelente, eximido".
- Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
- Si es menor a 4: "Reprobado".
*/
function calificacionesChile() {
    let nota = parseFloat(prompt("Ingresa una nota según el sistema chileno: "));
    if (nota >= 6 && nota < 7.1) {
        alert("Excelente, eximido.");
    } else if (nota >= 4 && nota < 6) {
        alert("Aprobado, vas a examen.");
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado.");
    } else {
        alert(INVALIDO)
    }
};

// Ejercicio 08: Buscador de Invitados
/* let invitados = ["Ana", "Luis", "Camila", "Diego"];
Crea una variable persona.
- Si la persona está en la lista, muestra: "¡Bienvenido/a [nombre]! Pasa a la fiesta".
- Si no está, muestra: "Lo siento, no estás en la lista de invitados".
*/
let invitados = ["Ana", "Luis", "Camila", "Diego"];
let detector = false;

function buscadorInvitados() {
    let persona = prompt("Ingresa tu nombre: ");

};