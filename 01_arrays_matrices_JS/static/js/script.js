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
    palabras.pop();
    alert(`${palabras[0]} ${palabras[1]} ${palabras[2]}`);
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
    alert(`Entró ${salon[0]} y la fila ahora es: ${alumnos[0]}, ${alumnos[1]}, ${alumnos[2]}.`);
};

// Ejercicio 3: Reordenando Números (Lógica de Índices)
// Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
/* - Accede al número 3 y súmale 2 directamente en la operación de concatenación.
- Construye la frase: "5 gatos negros duermen plácidamente".
- Muestra el resultado con alert().*/
function reordenaNumeros() {
    let datos = [3, "gatos", "negros", "duermes"];
    datos[0] += 2;
    let frase = `${datos[0]} ${datos[1]} ${datos[2]} ${datos[3]}`;
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