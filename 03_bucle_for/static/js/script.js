console.log("Conectado a JS...");

// Ejercicio 01:  El Contador en Pantalla
/* Selecciona el párrafo con el id pantalla.
- Crea un ciclo for que vaya del 1 al 10.
- En cada vuelta del ciclo, agrega (concatena con +=) el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo.*/
function contadorPantalla() {
    let numeros = [];
    const resultadoContenedor1 = document.getElementById("resultadoContenedor1");
    const resultado1 = document.getElementById("resultado1");

    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    };

    resultado1.textContent = `Contando: ${numeros.join(" - ")}`;
    resultadoContenedor1.classList.remove("desaparece");
};

// Ejercicio 02: Lista de Asistencia Automática
/*Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
- Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío ("").
- Usa un ciclo for para recorrer el arreglo. En cada iteración, agrega el nombre del estudiante al párrafo, separándolos por una coma y un espacio.*/
function asistenciaAutomatica() {
    let curso = ["Ana", "Diego", "Sofía", "Matías"];
    let resultado = [];
    const resultadoContenedor2 = document.getElementById("resultadoContenedor2");
    const resultado2 = document.getElementById("resultado2");
    resultado2.textContent = "";

    for (let i = 0; i < curso.length; i++) {
        resultado.push(curso[i]);
    };
    
    resultado2.textContent = resultado.join(", ");
    resultadoContenedor2.classList.remove("desaparece");
};

// Ejercicio 03: Buscador de Aprobados (Escala 1 a 7)
/*Tienes una lista con las notas finales de un curso: let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
- Crea una variable contadorAprobados que inicie en 0.
- Recorre el arreglo con un for. Si la nota es 4.0 o superior, suma 1 al contador.
- Al terminar el ciclo, muestra en el párrafo pantalla: "Total de alumnos aprobados: [número]".*/
function buscadorAprobados() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    const resultadoContenedor3 = document.getElementById("resultadoContenedor3");
    const resultado3 = document.getElementById("resultado3");

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4) {
            contadorAprobados++;
        };
    };

    resultado3.textContent = `Contador de usuarios aprobados: ${contadorAprobados}`;
    resultadoContenedor3.classList.remove("desaparece");
};

// Ejercicio 04: El Filtro de Inventario
/*Una tienda quiere mostrar solo los productos que están disponibles.
let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
- Recorre la lista con un ciclo for.
- Si el producto es diferente de "Agotado" (!==), agrégalo al texto del párrafo pantalla. Si dice "Agotado", sáltalo.*/
function filtroInventario() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    const resultadoContenedor4 = document.getElementById("resultadoContenedor4");
    const resultado4 = document.getElementById("resultado4");

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] == "Agotado") {
            continue;
        }
        resultado4.textContent += ``
    }

    resultadoContenedor4.classList.remove("desaparece");
}