//Clase 4 - Condicionales
//Microdesafio 3 - traductor condicional

let palabra = "puerta";
let traducida = "";

switch(palabra){
    case "gato":
        traducida = "cat";
        break;
    case "perro":
        traducida = "dog";
        break;
    case "puerta":
        traducida = "door";
        break;
    case "ventana":
        traducida = "windows";
        break; 
    case "mesa":
        traducida = "table";
        break;
    default:
        traducida = "La palabra ingresada es incorrecta.";
        break;
}

console.log(traducida);