
//definimos las variables
let x = 2;
let y = 4;

//mostrar el valor de cada variable
console.log("la variable de 'x' tiene un valor de: ", x);
console.log('la variable de "x" tiene un valor de: ', y);

console.log("------------------------------------------");

// operaciones matematicas
console.log("suma: ", x + y);
console.log("resta: ", x - y);
console.log("divición: ", x / y);
console.log("multiplicación: ", x * y);


// transformamos el int en un String
console.log("parce: " + (x * y));

//Definimos booleans
let t = true;
let f = false;

//comparativa de valores booleans
console.log("si comparamos t con t nos da: ", t == t);
console.log("si comparamos t con f nos da: ", t == f);
console.log("si comparamos f con f nos da: ", f == f);

console.log("---------------------------------------")

//comparativa una u otra
console.log("si es t o t nos da: ", t || t);
console.log("si es t o f nos da: ", t || f);
console.log("si es f o f nos da: ", f || f);

console.log("------------------------------------------")

//cumplir dos condiciones
console.log("si elegimos entre t y t tenemos: ", t && t);
console.log("si elegimos entre t y f tenemos: ", t && f);
console.log("si elegimos entre f y f tenemos: ", f && f);

console.log("-------------------------------------------")

//Distinto
console.log("tarea", t != t);
console.log(t != f);
console.log(f != f);


