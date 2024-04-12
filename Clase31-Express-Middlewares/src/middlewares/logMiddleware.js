/*Middleware global: Todas las peticiones que se hagan se 
almacenaran en un archivo txt*/ 

const fs = require('fs');
const path = require('path');

//Buena práctica ponerle el mismo nombre que el archivo
function logMiddleware(req,res,next) {
    const filePath = path.join(__dirname,'../logs/logs.txt');    
    const timestamp = Date.now();
    fs.appendFileSync(filePath,`${timestamp} - ${req.url}\n`);
    next();    
}

module.exports = logMiddleware;