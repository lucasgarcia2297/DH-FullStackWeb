//paquete File System: paquete para leer y escribir archivos.

//let fs = require('fs');
//console.log(fs);
let persona = { 
    nombre: "Lucas",
    apellido: "Garcia",
    hablar : function (){
        return "Holis.";
    }
}
//console.log(persona.hablar());

//MÓDULOS PREDEFINOS EN NODEJS
const fs = require("fs");

//MÓDULOS DE TERCEROS A INSTALAR:
/*Para instalar un módulo hago el comando: 'npm install nombreModulo' o 'npm i nombreModulo'
    Se instalará todo el paquete del modulo de node en la carpeta que esté.
*/
const moment = require("moment");
console.log(moment.now());

