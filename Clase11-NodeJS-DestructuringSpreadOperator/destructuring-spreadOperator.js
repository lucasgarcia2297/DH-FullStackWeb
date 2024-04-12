/**
 * Las asignaciones de objetos y arrays en Javascript se hacen por referencia:
 * const persona1 = persona2; persona1 y persona2 son la misma persona.
 * 
 * Antiguamente para hacer la copia por valor se hacia 
 * const persona1 = Object.assign({}, persona2)
 * 
 * Ahora con destructuring y spread operator es más facil CLONAR elementos
 * const persona1 = ...persona2 
 * 
 * La linea anterior hace un clon de la persona2.
 * opcionalmente podria agregar valores en la misma copia
 * const numeros1 = [0, 1, 2, 3, 4];
 * const numeros2 = [5, 6, 7, 8, 9];
 * const numeros3 = [...numeros1 , ...numeros2]
 *
*/

const numeros = [1,2,3,4,5,6,7,8,9,10];

//console.log(numeros);

//Destructuring 
const [primero, ,tercero, , , sexto] = numeros;
//console.log(primero);
//console.log(sexto);

//Spread Operator
const [,segundo, ,cuarto ,quinto, , ...resto] = numeros;
//console.log(quinto);
//console.log(resto); //Array con el resto de valores

//Destructuring y Spread Operator con objetos:
const curso = {
    materia : "Algoritmo y Estructura de Datos",
    horario : ["Martes 16 a 18hs ", "Jueves 17 a 20hs"]
}
const {materia, horario} = curso;
//console.log(horario); //La variable debe llevar EL MISMO nombre que la propiedad del objeto

//spread operator en objetos
const alumno1 = {
    nombre : "Lucas",
    apellido : "Garcia",
    ...curso
}
const alumno2 = {
    nombre : "Juan",
    apellido : "Perez",
    ...curso
}


//console.log(alumno1);
//console.log(alumno2);
//console.log(alumno2);



const notas = [1,2 ,4, 6,7 ,2.3 ,10, -12.21, -12 ];
const notas2 = [1,2 , 6,7 ,2.3 ,10, -12.11, -12 ];
console.log(Math.min(...notas, ...notas2));
