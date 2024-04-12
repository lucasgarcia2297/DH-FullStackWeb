/*
Javascript utiliza los operadores && teniendo en cuenta los 
valores predefinidos cuando las variables no tienen valor
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

//Prueba de falsy
let numero = 43456;
if (!numero){
    console.log("la variable está vacía");
}else {
    console.log("la variable tiene algo");
}

//Comparadores lógicos y aplicación del falsy
let email = "lucas.garcia@gmail.com";
let nombre = "Lucas";
let apellido = "";
if(!email || !nombre || !apellido){
    console.log("Datos incompletos");

}else{
    console.log("Datos completos");
}