console.log("Conectado a JS...");
const INVALIDO = "Ingresa valoras válidos.";

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
        alert("El nombre no puede estar vacío");
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
        alert("El nombre no puede estar vacío");
    } else {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        resultado1.textContent = resultado;
        input.value = "";
        contenedor.classList.remove("escondido");
        alert("Alumno enlistado correctamente.");
    };
};

/* Ejercicio 3: Sistema de Delivery
Contexto: Un restaurante tiene pedidos listos. El cajero puede despachar el pedido más antiguo, o cancelar el último pedido que entró por un error.
- Crea un arreglo: let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
- Función Principal: Crea gestionarPedidos().
- Captura el texto del input. El usuario debe escribir la palabra "despachar" o "cancelar".
- Usa un if. Si escribió "despachar", usa .shift() para sacar la primera comida de la lista.
- Usa un else if. Si escribió "cancelar", usa .pop() para eliminar la última comida de la lista.
- Muestra en el textContent: "Pedidos pendientes: " seguido del arreglo.
- Limpia el input.*/
const resultado1 = document.getElementById("resultado3");
let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
resultado1.textContent = entregas.join(", ");
function actualizarPedido(pedido) {
    if (pedido === "despachar") {
        entregas.shift();
        alert("Entrega despachada con éxito.");
    } else if (pedido === "cancelar") {
        entregas.pop();
        alert("Entrega cancelada con éxito");
    } else {
        alert(INVALIDO);
    };

    return entregas.join(", ");
}

function gestionarPedidos() {
    const input = document.getElementById("input3");
    input.value = input.value.trim();
    input.value = input.value.toLowerCase();
    let resultado = actualizarPedido(input.value);
    input.value = "";
    resultado1.textContent = resultado;
};

/*Ejercicio 4: Validador de Códigos de Descuento
Contexto: Una tienda online revisa si el código promocional que ingresó el cliente existe en su base de datos para aplicarle una rebaja.
- Crea un arreglo: let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
- Función Principal: Crea verificarCodigo().
- Captura el código desde el input.
- Crea una variable mensaje = "Código inválido o expirado";.
- Recorre el arreglo con un ciclo for.
- Si el elemento actual del ciclo es igual al texto del input, cambia la variable mensaje a "¡Éxito! Código aceptado".
- Fuera del ciclo, inyecta la variable mensaje en el textContent del párrafo.
- Limpia el input.*/
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
let mensaje = "Código inválido o expirado.";
function verificacionDelCodigo(codigo) {
    if (codigosValidos.includes(codigo)) {
        mensaje = "¡Éxito! Código aceptado."
    } else {
        mensaje = "Código inválido o expirado.";
    };
    return mensaje;
};

function verificarCodigo() {
    const contenedor = document.getElementById("resultadoContenedor4");
    const resultado1 = document.getElementById("resultado4");
    const input = document.getElementById("input4");
    input.value = input.value.trim();
    if (input.value == "") {
        alert(INVALIDO);
    } else {
        let resultado = verificacionDelCodigo(input.value);
        input.value = "";
        contenedor.classList.remove("escondido");
        resultado1.textContent = resultado;
    };
};

/*Ejercicio 5: Simulador de Cuotas
Contexto: Un cliente compra un producto y
el sistema le genera automáticamente las etiquetas para sus próximas 3 letras de pago.
- Función Principal: Crea simularCuotas().
- Captura el nombre del producto desde el input (ej: "Bicicleta").
- Crea una variable vacía: registroPagos = "";
- Crea un ciclo for que dé exactamente 3 vueltas (del 1 al 3).
- En cada vuelta, súmale (+=) a registroPagos el producto y el número de la cuota (Ej: producto + " - Cuota " + i + " | ").
- Fuera del ciclo, muestra la variable registroPagos en el textContent del párrafo.
- Limpia el input.*/

function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += ` | Cuota ${i} de ${cuota}: ${parseInt(valor/3)} |`;
    };
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5_1");
    let valorProducto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5_2");
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById("resultado5");
    const container = document.getElementById("resultadoContenedor5");
    let resultado = calcularCuotas(valorProducto, cuota);
    result.textContent = resultado;
    producto.value = "";
    cuotaInput.value = "";
    container.classList.remove("escondido");
};

/*Ejercicio 6: Filtro de Presupuesto
Contexto: Una vitrina virtual tiene varios precios. El cliente ingresa cuánta plata tiene en el bolsillo, y el sistema le muestra solo los precios que le alcanza para pagar.
- Crea un arreglo de precios: let vitrina = [2500, 15000, 8000, 30000, 5000];
- Función Principal: Crea filtrarPrecios().
- Captura el número desde el input (este será el presupuesto del cliente. Recuerda usar Number()).
- Crea una variable opciones = "Te alcanza para los precios: ";
- Recorre el arreglo vitrina con un for.
- Dentro del ciclo, usa un if. Si el precio actual del arreglo es menor o igual (<=) a la plata que ingresó el cliente, súmalo a la variable opciones más un guion (-).
- Muestra el resultado en el textContent del párrafo.
- Limpia el input.*/
let vitrina = [2500, 15000, 8000, 30000, 5000];
let disponibles = [];
let opciones = "Te alcanza para los precios: ";
function verificarPrecio(presupuesto) {
    for (let i = 0; i <= vitrina.length; i++) {
        if (presupuesto >= vitrina[i]) {
            disponibles.push(vitrina[i]);
        };
    };
    if (disponibles.length == 0) {
        opciones = "No te alcanza para nada.";
        return opciones;
    } else {
        opciones = "Te alcanza para los precios: ";
        return opciones + disponibles.join(" - ");
    };
};

function filtrarPrecios() {
    const contenedor = document.getElementById("resultadoContenedor6");
    const resultado1 = document.getElementById("resultado6");
    const input = document.getElementById("input6");
    input.value = input.value.trim();
    let num = parseInt(input.value);

    if (num == "" || isNaN(num)) {
        alert(INVALIDO);
        input.value = "";
    } else {
        let resultado = verificarPrecio(num);
        input.value = "";
        contenedor.classList.remove("escondido");
        resultado1.textContent = resultado;
        disponibles = [];
    };
};

/*Ejercicio 7: Cálculo de Sueldo Líquido (Una función llama a otra)
Contexto: El usuario ingresa su Sueldo Bruto. Una función matemática oculta descuenta el 20% (AFP y Salud)
y le devuelve el dato a la pantalla para mostrar cuánto dinero real recibirá a fin de mes.
- Función Ayudante (La Matemática): Crea una función calcularDescuentos(bruto). Esta función multiplica
el bruto por 0.8 y usa return para devolver el resultado.
- Función Principal (La Interfaz): Crea procesarSueldo(). (Esta va en el botón).
- Captura el sueldo desde el input y conviértelo a número.
- Dentro de procesarSueldo, llama a tu función calcularDescuentos() pasándole el número capturado,
y guarda lo que te devuelve en una variable llamada sueldoLiquido.
- Modifica el textContent del párrafo: "Tu sueldo a pago es: $" + sueldoLiquido.
- Limpia el input.*/
function calcularDescuentos(bruto) {
    let liquidandoSueldo = bruto * 0.8;
    return liquidandoSueldo.toFixed(2);
};

function procesarSueldo() {
    const contenedor = document.getElementById("resultadoContenedor7");
    const resultado1 = document.getElementById("resultado7");
    const input = document.getElementById("input7");
    input.value = input.value.trim();
    let sueldo = parseFloat(input.value);

    if (sueldo == "" || isNaN(sueldo)) {
        alert(INVALIDO);
        input.value = "";
    } else {
        let sueldoLiquido = calcularDescuentos(sueldo);
        input.value = "";
        contenedor.classList.remove("escondido");
        resultado1.textContent = `Tu sueldo a pagar es: $${sueldoLiquido}`;
    };
};

/*Ejercicio 8: El Carrito de Compras (Reto Final - Delegación de tareas)
Contexto: Vamos agregando productos al carrito. Una función anota el producto y
le pide ayuda a otra función para que dibuje el carrito actualizado en la pantalla.
- Crea un arreglo vacío: let carrito = [];
- Función Ayudante (La Pantalla): Crea actualizarPantalla(). Esta función tomará el arreglo carrito,
lo unirá en un texto (ej: carrito.join(" - ")) y lo inyectará en el textContent del párrafo.
- Función Principal (La Lógica): Crea agregarAlCarrito(). (Esta va en el botón).
- Captura el producto desde el input.
- Si el input no está vacío, usa .push() para agregarlo al carrito.
- ¡Limpia el input!
- Al final de esta función, llama a actualizarPantalla() para que la vista se refresque automáticamente
con el nuevo producto.*/
let carrito = [];
function actualizarPantalla() {
    const contenedor = document.getElementById("resultadoContenedor8");
    const resultado1 = document.getElementById("resultado8");
    let carritoMostrar = carrito.join(", ");
    contenedor.classList.remove("escondido");
    resultado1.textContent = `Carrito: ${carritoMostrar}`;
}

function agregarAlCarrito() {
    const input = document.getElementById("input8");
    input.value = input.value.trim();

    if (input.value !== "") {
        carrito.push(input.value);
        alert("Producto agregado al carro.");
        input.value = "";
        actualizarPantalla();
    } else {
        alert(INVALIDO);
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
};