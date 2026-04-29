

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

console.log("--------------------------------");

//definimos un array de string, en este caso de frutas
var frutas = ["manzana", "pera", "uva", "naranja"];

//recorremos el array, recordar que las listas empiezan del 0,1,2....

for (var i = 0; i < frutas.length; i++){
    console.log("frutas: ", frutas[i]);
}

console.log("--------------------------------");

// forEach (forEach es el que recorre, 
// la variable fruta es el que obtiene los datos y los entrega)
frutas.forEach(function (fruta) {
    console.log("Fruta con forEach: ", fruta);
    
}
);

console.log("--------------------------------");

var ucm = ["Iron", "Hulk", "Thor", "Gru"];
//version optimizado para listas mas pequeñas
for (var i of ucm){
    console.log("Personaje: ", i);
}


console.log("--------------------------------");

//recorrer la funcion con MAP, y agregar cambios
// todo mayuscula

var ucmMayusculas = ucm.map(function(ucm){
    return ucm.toUpperCase();
    
});
console.log(ucmMayusculas);


console.log("--------------------------------");

//todo minuscula
var ucmMinuscula = ucm.map(function(ucm){
    return ucm.toLowerCase();
    
});
console.log(ucmMinuscula);

console.log("--------------------------------");

//definir array
var bandas = ["Adema", "AC/DC", "Angra", "As lie day"];

//filtrar bandas que tengo 5 caracteres
var bandasCortas = bandas.filter(function (filtro){
    return filtro.length <= 5;
});
console.log(bandasCortas);

console.log("--------------------------------");

//filtrar bandas (2- filtro.replace para sistituir o añadir?)
var bandasCortas = bandas.filter(function (filtro){
    return filtro.replace;
});
console.log(bandasCortas);
