//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(value) {
    return value * value;
}
console.groupEnd();

//Código del triángulo
function perimetroTriangulo(value1, value2, valueB) {
    return (value1 + value2 + valueB);
}
function areaTriangulo(valueB, valueH) {
    return (valueB * valueH) / 2;
}
console.groupEnd();

// Código del círculo
console.group("circulos");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(valueR) {
    return (valueR * 2) * PI;
}
//Área
function areaCirculo(valueR) {
    return (valueR * valueR) * PI;
}

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const resultadoCuadrado = document.getElementById("textCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    resultadoCuadrado.innerHTML = `El perímetro es de ${perimetro}`;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const resultadoCuadrado = document.getElementById("textCuadrado");
    const value = Number(input.value);
    const area = areaCuadrado(value);
    resultadoCuadrado.innerHTML = `El área es de ${area}`;
}
// Aqui trabajaremos con el triángulo
function calcularPerimetroTriangulo (){
    const input = document.getElementById("inputTriangulo1");
    const value1 = Number(input.value);
    const resultadoTriangulo = document.getElementById("textTriangulo");
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const inputB = document.getElementById("inputTriangulobase");
    const valueB = Number(inputB.value);
    
    const perimetroT = perimetroTriangulo(value1, value2, valueB);
    resultadoTriangulo.innerHTML = `El perímetro del triángulo es ${perimetroT}`;
}
function calcularAreaTriangulo (){
    const inputB = document.getElementById("inputTriangulobase");
    const valueB = Number(inputB.value);
    const resultadoTriangulo = document.getElementById("textTriangulo");
    const inputH = document.getElementById("inputTrianguloh");
    const valueH = Number(inputH.value);

    const areaT = areaTriangulo(valueB, valueH);
    resultadoTriangulo.innerHTML = `El área del triángulo es ${areaT}`;
}
//Aqui trabajaremos con el círculo
function calcularPerimetroCirculo(){
    const inputR = document.getElementById("inputCirculo");
    const resultadoCirculo = document.getElementById("textCirculo");
    const valueR = Number(inputR.value);
    const perimetroCir =  perimetroCirculo(valueR);
    resultadoCirculo.innerHTML = `El perímetro es de ${perimetroCir}`;
}
function calcularAreaCirculo (){
    const inputR = document.getElementById("inputCirculo");
    const valueR = Number(inputR.value);
    const resultadoCirculo = document.getElementById("textCirculo");
    const areaCir = areaCirculo(valueR);
    resultadoCirculo.innerHTML = `El área es de ${areaCir}`;
}
//Calcular altura de un triángulo isósceles, con la condición de que se verifique que cumple los requisitos para ser considerado isósceles.
function calcularAlturaTriangulo (){
    const inputA = document.getElementById("inputTrianguloA");
    const trianguloGrandeLadoA = Number(inputA.value);
    const inputB = document.getElementById("inputTrianguloB");
    const trianguloGrandeLadoB = Number(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const trianguloGrandeLadoBase = Number(inputBase.value);
    const respuestaAlturaIsosceles = document.getElementById("respuestaAltura");
    const AlturaTriangulo = alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase);
    respuestaAlturaIsosceles.innerHTML = `La altura del Triángulo Isósceles es ${AlturaTriangulo}`;
}
function alturaTrianguloIsosceles (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
    if (trianguloGrandeLadoA === trianguloGrandeLadoB) {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;
        
        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        const calculoCuadrado = trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
        const trianguloPequenoLadoA = (Math.sqrt(calculoCuadrado));
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;

    } else {
        alert("Los lados A y B no son iguales, por lo tanto no es un triángulo isósceles");
    }
}