
let notas = [1,2,3.5,10,10,7];

function aprobado(nota){
    return nota>=6;
}

function suma(nro1, nro2){
    return nro1 + nro2;
}

function mostrarNota(nota){
    console.log("\nNota: " + nota);
}

//Muestra las notas originales
console.log("Notas: ");
console.log(notas);


//FILTRA y muestra solo los aprobados
let aprobados = notas.filter(aprobado);
console.log("\nNotas de aprobados: ")
console.log(aprobados);  //Muestra los aprobados.

//SUMA todas las notas y calcula el promedio
let promedio = notas.reduce(suma) / notas.length;
console.log("\nEn promedio las notas de los alumnos es igual a: ");
console.log(promedio.toFixed(2));

let totales = notas.reduce((acum, actual) => {
    if(actual >6){
        acum.totalAprobados += actual;
    }else{
        acum.total += actual;
    }
    return acum;
},{total : 0, totalAprobados : 0}); //Tambien puedo retornar un objeto, como buena práctica siempre inicializar el valor del acumulador, antes de cerrar parentesis. 
console.log("Suma total de Aprobados: " + totales.totalAprobados);
console.log("Suma totales: " + totales.total);

//MAPEA cada nota multiplicandola por 10 para obtenerlas en un rango de 0 a 100 en lugar de 0 a 10.
let notas0a100 = notas.map(nota => nota*10);
console.log("\nNotas de 0 a 100: ");
console.log(notas0a100);

console.log("\nLista de notas: ");
notas.forEach(mostrarNota);

//Si tengo tambien los nombres de los alumnos, es decir un array de arrays.
let alumnosYNotas = [["juan",2],["Franco",3],["Lucas",8],["Sofia",10]];
//FILTRAR solo aprobados y MOSTRARLOS
let alumnosAprobados = alumnosYNotas.filter(nota => nota[1]>=6);
console.log("\nAprobados: "); 
alumnosAprobados.forEach(alumno => console.log("Alumno: " + alumno[0] + " - Nota: " + alumno[1])); 

//Si tengo tambien los nombres de los alumnos pero como objetos literales dentro de un array.
let alumnosYNotasObj = [
    {nombre:"Juan",nota: 2},
    {nombre:"Franco",nota: 3},
    {nombre: "Lucas",nota: 8},
    {nombre: "Sofia",nota: 10}
];
//FILTRAR solo los Desaprobados y MOSTRARLOS
let alumnosDesaprobadosObj = alumnosYNotasObj.filter(alumno => alumno.nota < 6); 
console.log("\nDesaprobados: ");
alumnosDesaprobadosObj.forEach(alumno => console.log("Alumno: " + alumno.nombre + " - Nota: " + alumno.nota));  

console.log("\nTODOS APROBADOS ");
alumnosYNotasObj.forEach(alumno => alumno.nota = alumno.nota < 6? 6 : alumno.nota); //A pesar de que forEach no devuelve nada, puede hacer que se modifique el array
alumnosYNotasObj.forEach(alumno => console.log("Alumno: " + alumno.nombre + " - Nota: " + alumno.nota));  
console.log(alumnosYNotasObj);

//FIND: devuelve el primer elemento que cumpla con la condicion
const notaDeLucas = alumnosYNotasObj.find((alumno) => alumno.nombre === "Lucas" )
console.log("\Alumno Encontrado: (find)");
console.log(notaDeLucas);

//De array o objeto literal a JSON
console.log("\nDe Objeto Literal o Array a JSON: ");
let alumnosJSON = JSON.stringify(alumnosYNotasObj,null,2); //null, 2 para que me lo muestre identado y no en una sola linea
console.log(alumnosJSON.toLowerCase());

//De array o objeto literal a JSON
console.log("\nDe JSON a Objeto Literal o Array:");
let alumnosObj = JSON.parse(alumnosJSON);
console.log(alumnosObj);

let notaInexistente = notas.filter(nota => nota == 103210);
console.log(notaInexistente == null);

