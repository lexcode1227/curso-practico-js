// const notas = [
//     {   curso: "EDN",
//         nota: "7", 
//         credito: 4,
//     },
//     {   curso: "FIE",
//         nota: "8", 
//         credito: 4,   
//     },
//     {   curso: "LEE",
//         nota: "7", 
//         credito: 4,   
//     },
//     {   curso: "MCA",
//         nota: "9", 
//         credito: 3,   
//     },
//     {   curso: "PSC",
//         nota: "9", 
//         credito: 3,   
//     },
// ];
function calcularPromedioP (notas){
    const notasXcredito = notas.map(function(notasMultiplicadas){
        return notasMultiplicadas.nota * notasMultiplicadas.credito;
    });
    const sumanotasXcredito = notasXcredito.reduce(function(suma = 0, nuevoValor){
        return suma + nuevoValor;
    }); 
    //Recordar aprender a como convertir un String a Number para aplicarlo abajo.
    const creditos = notas.map(function(notasMultiplicadas){
        return notasMultiplicadas.credito;
    });
    const sumaCreditos = creditos.reduce(function(suma = 0, nuevoValor){
        return suma + nuevoValor;
    });
    const promedioPonderado = sumanotasXcredito / sumaCreditos;
    return promedioPonderado;
}