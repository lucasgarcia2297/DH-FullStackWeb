//Microdesafío 2
let nombre = "Lucas";
let apellido = "Garcia";
let sueldoActual = 20000;
let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual: 
$${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%: 
$${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`
);
