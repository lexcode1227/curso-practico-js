function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function calcularMediana (cantidades){
    function esPar(numerito) {
        if (numerito % 2 === 0){
           return true; 
        } else {
            return false; 
        }
    }
    cantidades.sort(function(a, b) {
        return a - b;
    });
    const mitadLista = parseInt(cantidades.length / 2);
    
    if (esPar (cantidades.length)) {
        const elemento1 = cantidades[mitadLista];
        const elemento2 = cantidades[mitadLista - 1]; 
    
        const elemento1y2 = calcularPromedio([
            elemento1,
            elemento2,
        ]);
        const mediana1 = elemento1y2;
        return mediana1;
    } else {    
        const mediana2 = cantidades[mitadLista];
        return mediana2;
    }
}


