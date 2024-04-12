// let nombreCursos2 = [, "css3", "javascript", "react", "nodejs"]
// let precios2 = [4000, 5000,10000,7000,15000];
// let cursos2 = [nombreCursos,precios];



let nombreCursos = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];
let cursoATomar = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"];

// function calcularTotal1(nombreCursos, cursoATomar){
//    let monto = 0;
//     for(i = 0; i < cursoATomar.length; i++){
//         for(x = 0; x < nombreCursos.length; x=x+2){
//         if(cursoATomar[i] === nombreCursos[x].toUpperCase()){
//             monto += nombreCursos[x+1]
//         }
//      }
//     }
//     return monto;
// }

function calcularTotal(nombreCursos, cursoATomar){
    let monto = 0;
    for(let i = 0; i < cursoATomar.length; i++){
        for(let j = 0; j < cursoATomar.length; j++){
         if(cursoATomar[i] === nombreCursos[j][0].toUpperCase()){
            monto += nombreCursos[j][1];
         }
        }
    }
    return monto;
}
 
function obtenerDatos(nombre, apellido, nombreCursos,cursoATomar,callBack){
    let mensaje = `Estimad@ ${nombre} ${apellido}, en función de los cursos seleccionados: \n`;
    for (let i = 0; i < cursoATomar.length; i++) {
        mensaje += `${i+1} - ${cursoATomar[i]} \n`;
    }
    mensaje += `El monto total a pagar es de: $${callBack(nombreCursos,cursoATomar)}. \nBienvenido a la gran aventura Digital House`;
    return mensaje;
}

console.log(obtenerDatos("Lucas", "Garcia",nombreCursos, ["HTML5"],calcularTotal));