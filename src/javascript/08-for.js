

//definimos una variable numero
var numero = 1;

//utilizamos el fot para incrementar en 1 cada numero
for (var i = 1 ; i <= numero; i ++){
    console.log("Numero: ", i);
}

console.log("--------------------------------");
for (var i = 10 ; i >= numero; i --){
    imprime = ("Numero: " + i);
    console.log(imprime);
}

console.log("--------------------------------");

//buscamos numeros pares 

for (var i = 2; i <= numero; i += 2){
    console.log("Par: " + i);

}
console.log("--------------------------------");

//identificamos los numero par e impar

for (var i = 1; i <= numero; i++){
    var esPar = i % 2 == 0;
    if (esPar){
        console.log(i + " es par");
    }else{
        console.log(i + " es impar");
    }
}

//definimos un array de string, en este caso de frutas
var frutas = ["manzana", "pera", "uva", "naranja"];

//recorremos el array, recordar que las listas empiezan del 0,1,2....

for (var i = 0; i < frutas.length; i++){
    console.log("frutas: ", frutas[i]);
}