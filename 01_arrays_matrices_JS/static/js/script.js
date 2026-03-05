console.log("Conectado a JS...");

// Ejercicio 1: El Mensaje Desordenado (Push y Pop)
/* Instrucciones: Crea una función llamada construirFrase. Dentro de ella, 
define el arreglo let palabras = ["programar", "es"];

- Usa .push() para agregar "increíble" al final.
- Usa .push() para agregar "borrar" al final.
- Usa .pop() para eliminar "borrar".
- Muestra con alert() la frase unida por espacios.*/
function construirFrase() {
    let palabras = ["programar", "es"];
    palabras.push("increíble");
    palabras.push("borrar");
    let palabraBorrada = palabras.pop();
    alert(`${palabras.join(" ")}`);
    alert(`Palabra borrada: ${palabraBorrada}`);
};

// Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
// Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];
/*- Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
- El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
- Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".*/
function filaEspera() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("Luis");
    let salon = [alumnos.shift()];
    alert(`Entró ${salon[0]} y la fila ahora es: ${alumnos.join(", ")}`);
};

// Ejercicio 3: Reordenando Números (Lógica de Índices)
// Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
/* - Accede al número 3 y súmale 2 directamente en la operación de concatenación.
- Construye la frase: "5 gatos negros duermen plácidamente".
- Muestra el resultado con alert().*/
function reordenaNumeros() {
    let datos = [3, "gatos", "negros", "duermes"];
    datos[0] += 2;
    let frase = `${datos.join(" ")} plácidamente`;
    alert(frase);
};

// Ejercicio 4: Coordenadas en la Matriz (Suma Simple)
/* Instrucciones: En una función, define:
let matriz = [
  [10, 20],
  [30, 40]
];
- Accede al número 10 y al 40.
- Suma ambos valores y muestra el resultado con un alert()
que explique qué posiciones sumaste (ej: "Suma de [0][0] y [1][1]").
*/
function coordenadaMatriz() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    let suma = matriz[0][0] + matriz[1][1];
    alert(`Se han sumado los números ${matriz[0][0]} y ${matriz[1][1]} dando un total de ${suma}`);
};

// Ejercicio 5: El Intruso en la Tercera Dimensión
// Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];
/*- Accede al número 4.
- Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
- Muestra la matriz completa en un alert().*/
function intrusoDimension() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5);
    alert(datos);
};

// Ejercicio 6: Traductor de Acciones (Matriz + Arreglo)
/* Instrucciones: Define let sujetos = ["El programador", "La computadora"]; 
y una matriz let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
- Crea una función que tome a "El programador" y la acción "analiza".
- Concatena la frase y lánzala por alert().*/
function traductorAccion() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    let frase = `${sujetos[0]} ${verbos[0][1]}`;
    alert(frase);
};

// Ejercicio 7: Limpieza de Datos (Pop y Unshift)`
// Instrucciones: Tienes el arreglo let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];.
/*- Elimina el primer elemento ("Error") y el último ("Virus").
- Agrega "Monitor" al inicio.
- Muestra el inventario final con alert().*/
function limpiezaDatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    let itemsQuitados = [inventario.shift(), inventario.pop()];
    inventario.unshift("Monitor");
    alert(inventario.join(", "));
    alert(`Los objetos quitados fueron: ${itemsQuitados.join(", ")}`);
};

// Ejercicio 8: La Matriz de Identidad Modificada
/* Instrucciones: Define una matriz de 3x3 llena de ceros. let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
- Cambia todos los ceros de la diagonal principal (superior izquierda a inferior derecha) por el número 1.
- Muestra el resultado de la fila central por alert().
- [0], [1][1], and [2][2]]*/
function identidadModificada() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(`${tablero[0]}\n${tablero[1]}\n${tablero[2]}`);
};

// Ejercicio 9: El Consultorio Médico (Complejo)
// Instrucciones: Crea una función con un arreglo let pacientes = ["Ana", "Betto"];
/*- Llegan dos pacientes más: "Carlos" y "Diana" (usa .push()).
- Atienden al primero (usa .shift()).
- Llega una urgencia: "Sonia" debe ser atendida de inmediato (usa .unshift()).
- Muestra cuántos pacientes quedan y quién es el siguiente en la lista
.*/
function consultorioMedico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    let atendiendo = [pacientes.shift()];
    atendiendo.shift();
    atendiendo.unshift("Sonia");
    alert(`Pacientes en espera: ${pacientes.join(", ")}\nAtendiendo ahora: ${atendiendo}`);
};

// Ejercicio 10:  Extracción de Profundidad (Matriz 3x3x3)
/* Instrucciones: Dada la siguiente estructura let caja = [
  ["frutas", "verduras"],
  [["manzana", "pera"], ["tomate", "lechuga"]]
];
- Accede a "pera" y a "lechuga".
- Crea una frase que diga: "En la canasta hay pera y lechuga".
- Muestra con alert().*/
function extraccionProfundidad() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let frase = `En la canasta hay ${caja[1][0][1]} y ${caja[1][1][1]}.`;
    alert(frase);
};