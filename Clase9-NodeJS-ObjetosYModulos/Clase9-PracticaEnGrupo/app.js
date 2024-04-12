//Microdesafío 1: 
const peliculas = require("./peliculas");

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i])
}


//Microdesafío 2:
const path = require("path"); //importar path para el manejo de rutas 
const fs = require("fs"); //importar file System para operar con archivos

const rutaDeArchivo = path.resolve(__dirname,"mensaje.txt"); //Asigno la ruta completa a una variable

const textoDelArchivo = fs.readFileSync(rutaDeArchivo,"utf-8"); //leo el archivo de la ruta especificada, en codificacion "utf-8"

console.log(textoDelArchivo);
