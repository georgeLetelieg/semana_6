

//definir variables
let edad = 18;
let limiteEdad = 18;

console.log("------------------------------")

//condicional if
if(edad >= limiteEdad){
    console.log("es mayor de edad");
}else{
    console.log("no es mayor de edad");   
}
console.log("-------------------------------");

//condicional if anidado
if(edad >= limiteEdad){
    console.log("es mayor de edad");
    
    if(edad == 20){
        console.log("el usuario tiene 20 años ");
    }else if(edad >= 21){
        console.log("es adulto en todos lados");
    }


}else{
    console.log("no es mayor de edad");   
}
console.log("-------------------------------");

if(edad >= limiteEdad && (edad <= (limiteEdad + 82))){
    console.log("mayor de edad y menor de 100");
    //agregamos el operador &&(y) y el distinto !=

}else if (edad <= limiteEdad  && edad != 2){
    console.log("esta persona es menor de edad y no tiene dos años");
}else{
    console.log("es un puberto");
}

console.log("-------------------------------");

//if con condicional or

if(edad == 1 || (edad < limiteEdad)){
    console.log("no puede comprar alcohol");
}else{
    console.log("si puede comprar alcohol");
    
}

console.log("-------------------------------");


