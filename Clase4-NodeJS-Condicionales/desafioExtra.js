//Clase 4 - Condicionales
//Desafío Extra - Aterrizar avión.

let altura = 234;
let velocidad = 278;
let mensaje = "";
if((150 <= altura && altura <=300) && (268 <= velocidad && velocidad <= 278)){
    mensaje = "Listo para iniciar aterrizaje.";
} else{
    mensaje = "No se puede iniciar aterrizaje.";
}
console.log(mensaje);

