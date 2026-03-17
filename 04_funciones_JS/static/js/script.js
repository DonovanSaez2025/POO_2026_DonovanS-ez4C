console.log("Conectado a JS...");

/* Ejercicio 1: Lista de Asistencia (push)
Contexto: Eres el profesor y estás pasando la lista. Cada alumno que dice "presente" debe ser anotado al final del registro.
- Crea un arreglo vacío: let asistencia = [];
- Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
- Captura el nombre escrito en el input.
- Usa .push() para meter a ese alumno al final del arreglo asistencia.
- Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
- Limpia el input vaciando su .value.*/
let asistencia = [];
function registrarAlumno() {
    let input = document.getElementById("input1").value;
    let resultadoContenedor1 = document.getElementById("resultadoContenedor1");

    if (input == "") {
        alert("El nombre no puede estar vacío.")
    } else {
        asistencia.push(input);
        alert("Alumno enlistado.");
    };

    resultadoContenedor1.classList.remove("desaparece");
}