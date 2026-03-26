console.log("Conectado a JS...");

/*Ejercicio 1: Función con validación de datos
Objetivo: Validar entradas antes de procesarlas.
Instrucciones:
Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente"*/
let numerosIngresados = [];
function verificarNumero() {
    let input = document.getElementById("input1");
    const contenedor = document.getElementById("resultadoContenedor1");
    const resultado = document.getElementById("resultado1");
    let numero = parseInt(input.value);
    if (isNaN(numero)) {
        resultado.textContent = "Debes ingresar un número.";
    } else {
        numerosIngresados.push(numero);
        resultado.innerHTML = `Número ingresado correctamente<br>${numerosIngresados.join(", ")}`;
    };
    input.value = "";
    contenedor.classList.remove("escondido");
};

/*ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.
Instrucciones:
Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más*/
function evaluarNota() {
    let input = document.getElementById("input2");
    const contenedor = document.getElementById("resultadoContenedor2");
    const resultado = document.getElementById("resultado2");
    let nota = parseFloat(input.value);
    if (nota >= 1.0 && nota < 4.0) {
        resultado.textContent = `Tienes ${nota} - reprobado.`;
    } else if (nota >= 4.0 && nota <= 5.9) {
        resultado.textContent = `Tienes ${nota} - aprobado.`;
    } else if (nota >= 6.0 && nota <= 7.0) {
        resultado.textContent = `Tienes ${nota} - sobresaliente.`;
    } else {
        resultado.textContent = "Ingresa una nota válida.";
    };
    input.value = "";
    contenedor.classList.remove("escondido");
};

/*Ejercicio 3: Uso de múltiples funciones (flujo completo)
Objetivo: Integrar varias funciones con roles distintos.
Instrucciones:
Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}
function calcularTriple(numero) {
    return numero * 3;
}
- Crea una función principal procesarNumero que:
- Capture un número desde un input
- Llame a ambas funciones
- Muestre en pantalla:
- - Cuadrado: X
- - Triple: Y*/
function calcularCuadrado(numero) {
    return numero * numero;
};

function calcularTriple(numero) {
    return numero * 3;
}

function procesarNumero() {
    let input = document.getElementById("input3");
    const contenedor = document.getElementById("resultadoContenedor3");
    const resultado = document.getElementById("resultado3");
    let num = parseInt(input.value)
    if (isNaN(num)) {
        resultado.textContent = "Ingresa un número válido.";
    } else {
        let x = calcularCuadrado(num);
        let y = calcularTriple(num);
        resultado.innerHTML = `<span>Número: ${num}</span><br><span>Cuadrado del número: ${x}</span><br><span>Triple del número: ${y}</span>`;
    };
    input.value = "";
    contenedor.classList.remove("escondido");
};

/*Ejercicio 4: Función que transforma texto
Objetivo: Manipular strings desde un input.
Instrucciones:
Crea un input para ingresar un texto.
Crea una función transformarTexto.
La función debe:
Capturar el texto
Convertirlo a mayúsculas (toUpperCase())
Mostrar el resultado en un <div>
Ejemplo esperado:
Entrada: hola mundo
Salida: HOLA MUNDO*/
function transformarTexto() {
    let input = document.getElementById("input4");
    const contenedor = document.getElementById("resultadoContenedor4");
    const resultado = document.getElementById("resultado4");
    let texto = input.value.trim();
    if (texto === "") {
        resultado.textContent = "No puede estar vacío.";
    } else {
        texto = texto.toUpperCase();
        resultado.textContent = texto;
    };
    input.value = "";
    contenedor.classList.remove("escondido");
}