console.log("Conectado a JS...");
const INVALIDO = "El nombre no puede estar vacío.";

/* Ejercicio 1: Lista de Asistencia (push)
Contexto: Eres el profesor y estás pasando la lista. Cada alumno que dice "presente" debe ser anotado al final del registro.
- Crea un arreglo vacío: let asistencia = [];
- Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
- Captura el nombre escrito en el input.
- Usa .push() para meter a ese alumno al final del arreglo asistencia.
- Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
- Limpia el input vaciando su .value.*/
let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
};

function registrarAlumno() {
    const contenedor = document.getElementById("resultadoContenedor1");
    const resultado1 = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    if (input.value == "") {
        alert(INVALIDO);
    } else {
        let nombre = input.value;
        let resultado = agregarLista(nombre);
        resultado1.textContent = resultado;
        input.value = "";
        contenedor.classList.remove("escondido");
        alert("Alumno enlistado correctamente.");
    };
};

/* Ejercicio 2: Fila de Urgencias Médicas (unshift e if)
Contexto: En un hospital, los pacientes graves no van al final de la fila, pasan directamente al primer lugar de atención.
- Crea un arreglo: let pacientes = ["Carlos", "María", "Diego"];
- Función Principal: Crea ingresarUrgencia().
- Captura el nombre del paciente desde el input.
- Usa un if para revisar si el input NO está vacío (!== "").
- Si escribieron un nombre, usa .unshift() para agregarlo al inicio del arreglo pacientes.
- Muestra en el textContent del párrafo: "Próximos a atender: " seguido del arreglo.
- Limpia el input.*/
let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.push(nombre);
    return pacientes.join(", ");
};

function ingresarUrgencia() {
    const contenedor = document.getElementById("resultadoContenedor2");
    const resultado1 = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value == "") {
        alert(INVALIDO);
    } else {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        resultado1.textContent = resultado;
        input.value = "";
        contenedor.classList.remove("escondido");
        alert("Alumno enlistado correctamente.");
    };
};