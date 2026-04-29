

//definimos una variable
let nombre = "Jorge";
// Creamos la primera funcion
function saludar(){
    console.log("Hola estudiante " + nombre + "!");
    console.log("estamos en clase");
}

//llamamos a la funcion a ejecutar
saludar();

//Declaracion tradicional
function saludar2(a){
    console.log("Hola" + a + "!");
}

//llamamos a la funcion
saludar2("Letelier");

//Declaracion tradicional
//function saludar2(a, b){
//    console.log("Hola" + a + "!" + b);
//}

//llamamos a la funcion
//saludar2("Letelier", "lala pipo");

console.log("----------------------------");

function saludar3(a, b){
    console.log("Hola " + a + "! " + b);
}
let ejemploA = "Sepulveda";
//llamamos a la funcion
saludar3(ejemploA, "lala pipo");

console.log("-----------------------------");
