

//definir variables
let edad = 30;
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

