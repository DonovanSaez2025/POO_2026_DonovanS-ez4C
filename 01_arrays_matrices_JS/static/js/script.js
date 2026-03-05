console.log("Conectado a JS...");

// Actividad 1: El Mensaje Desordenado (Push y Pop)
/*- Usa .push() para agregar "increíble" al final.
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

//Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
/*- Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
- El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
- Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".*/
function filaEspera() {
    let alumnos = ["Juan", "María", "Pedro"];
    console.log(`${alumnos}`)
    alumnos.unshift("Luis");
    console.log(`${alumnos}`)
    let salon = [alumnos.shift()];
    console.log(`${alumnos}\n${salon}`)
    alert(`Entró ${salon[0]} y la fila ahora es: ${alumnos[0]}, ${alumnos[1]}, ${alumnos[2]}.`);
};