var someObject = { str: "Iniciando JavaScript ...", id: 5 };
console.log(someObject);
var myName = "Catriel";
document.write(myName);
console.log(myName);
var age = 24;
console.log(age);
var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);
if (age > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}
if (age < ignasiAge) {
    console.log("Ignasi is older than you");
} else if (age > ignasiAge) {
    console.log("Ignasi is younger than you");
} else {
    console.log("You have the same age as Ignasi");
}
var nameOfClass = ["persona4", "persona2", "persona1", "persona5", "persona3"];
var arrayordenado = nameOfClass.sort();
console.log(arrayordenado);
var ageOfClass = [13, 22, 32, 41, 13];

var i = 0;

function esPar(variable) {
    if (variable % 2) {
        return false;
    }
    return true;
}

while (i < ageOfClass.length) {
    if (esPar(ageOfClass[i])) {
        console.log(ageOfClass[i]);
    }
    i++
}

function imprimirMinimoValor(array) {
    var minimoValor = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < minimoValor) {
            minimoValor = array[i];
        }
    }
    console.log(minimoValor);
}

imprimirMinimoValor(ageOfClass);

function imprimirMaximoValor(array) {
    var maximoValor = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximoValor) {
            maximoValor = array[i];
        }
    }
    console.log(maximoValor);
}

imprimirMaximoValor(ageOfClass);

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function imprimirValorPosicion(array, index) {
    console.log(array[index]);
}

imprimirValorPosicion(array, index);

var array2 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var arrayDeRepetidos;

function imprimirRepetidos(array) {
    array2 = array;
    for (i = 0; i < array.length; i++) {
        for (e = i; e < array2.length; e++) {
            if ((array[i] == array2[e]) && (i != e)) {
                console.log(array[i]);
            }
        }
    }
}

imprimirRepetidos(array2);

myColor = ["Red", "Green", "White", "Black"];
var allcolors;

function unificarArray(array, arrayunificado) {
    arrayunificado = (array.join());
    return arrayunificado;
}

allcolors = unificarArray(myColor, allcolors);

console.log(allcolors);


var x = [3, 2, 4, 4, 3];
var xInvertida;

xInvertida = x.reverse(x);

console.log(xInvertida);

var cadena0="webmaster";
var cadena0Ordenada;
console.log(cadena0);
function ordenarCadena2(cadena){
    var array=cadena.split('');
    var arrayOrdenado=array.sort();
    cadena=arrayOrdenado.join('');
    return cadena;
}
//function ordenarCadena(cadena){
//    var aux;
//    for(i=0;i<cadena.length;i++){
//        for(e=o;e<(cadena.length-i);e++){
//            if(cadena[e]>cadena[e+1]){
//                aux=cadena[e];
//                cadena[e]=cadena[e+1];
//                cadena[e+1]=aux;
//            }
//        }
//    }
//    return cadena;
//}
//cadena0Ordenada=ordenarCadena(cadena0);
cadena0Ordenada=ordenarCadena2(cadena0);
console.log(cadena0Ordenada);

var cadena1="prince of persia";
var cadena1Normalizada;
console.log(cadena1);

function normalizarCadena(cadena){
    var matriz=cadena.split('');
    matriz[0]=matriz[0].toUpperCase();
    for(i=1; i<matriz.length; i++){
        if(matriz[i-1]==' '){
            matriz[i]=matriz[i].toUpperCase();
        }
    }
    cadena=matriz.join('');
    return cadena;
}
cadena1Normalizada=normalizarCadena(cadena1);
console.log(cadena1Normalizada);

var cadena2="Tutorial de desarrollo web";
var palabraMasLarga;
console.log(cadena2);

function palabraMasLarga(cadena){
    var array=cadena.split(' ');
    var palabraMasLarga=array[0];
    for(i=0; i<array.length; i++){
        if(array[i].length > palabraMasLarga.length){
            palabraMasLarga=array[i];
        }
    }
    return palabraMasLarga;
}

palabraMasLarga=palabraMasLarga(cadena2);
console.log(palabraMasLarga);