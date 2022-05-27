let listaIngresos = [];
let listaGastos = [];
let sumaIngresos = 0;
let sumaGastos = 0;
let contadorIngresos = 0;
let contadorGastos = 0;
let saldoDisponible = 0;

function sumarIngresos (cantidades, conceptos){
    let cantidad = parseInt(document.getElementById("cantidad-ingresada").value);
    let concepto = document.getElementById("concepto-ingresada").value;
    document.getElementById("formularioIngresos").reset();
    listaIngresos.push({
        cantidad,
        concepto
    });
    // Sumar las cantidades del objeto totalIngresos
    sumaIngresos = listaIngresos.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    resumenIngresos(listaIngresos);
}

function sumarGastos (cantidades, conceptos){
    let cantidad = parseInt(document.getElementById("cantidad-gastada").value);
    let concepto = document.getElementById("concepto-gastada").value;
    document.getElementById("formularioGastos").reset();
    listaGastos.push({
        cantidad,
        concepto
    });
    // Sumar las cantidades del objeto totalIngresos
    sumaGastos = listaGastos.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    resumenGastos(listaGastos);
}

//Mostrar la lista de ingresos y gastos
const listaConceptos = document.getElementById("tableBalance");

//Funcion 
function resumenIngresos(lista) {
    const itemConcept = document.createElement('div');
    itemConcept.classList.add("single-concept");

    itemConcept.innerHTML = 
        `<div class="single-concept">
            <div class="concept-left">
                <p>${lista[contadorIngresos].concepto}</p>
                <p id="concept-left_text">FONDOS</p>
            </div>
            <p class="concept-right"><span>+</span><span>$</span>${lista[contadorIngresos].cantidad}</p>
        </div>`;
    listaConceptos.insertAdjacentElement("beforeend", itemConcept);
    contadorIngresos +=1;
} 
//Función resumen Gastos
function resumenGastos(lista) {
    const itemConcept = document.createElement('div');
    itemConcept.classList.add("single-concept");

    itemConcept.innerHTML = 
        `<div class="single-concept">
            <div class="concept-left">
                <p>${lista[contadorGastos].concepto}</p>
                <p id="concept-left_text">FONDOS</p>
            </div>
            <p class="concept-right"><span>-</span><span>$</span>${lista[contadorGastos].cantidad}</p>
        </div>`;
    listaConceptos.insertAdjacentElement("beforeend", itemConcept);
    contadorGastos +=1;
} 
function calcularSaldo() {
    console.log("función de calcular saldo para mas adelante");
}