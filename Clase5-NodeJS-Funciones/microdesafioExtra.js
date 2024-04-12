//Clase 5 - Funciones
//Microdesafio extra

function toUpper(cadena) {
    return "El string en mayúsculas es: " + cadena.toUpperCase();
}

function tipo(dato) {
    return "El tipo de dato es: " + typeof dato;
}

function edadPerros(edad) {
    return "La edad del perro es: " + edad * 7;
}

function valorHora(salario, cantDias, cantHoras) {
    return "El valor de cada hora trabajada es: $" + salario / cantDias / cantHoras;
}

console.log(toUpper("lucas"));
console.log(tipo(100));
console.log(edadPerros(7));
console.log(valorHora(220000, 20, 8));

