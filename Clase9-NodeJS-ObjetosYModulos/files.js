const fs = require("fs");
const path = require("path");

function getContentFile(filePath){  //fileName es toda la ruta del archivo que quiero acceder.
    //const file = fs.readFileSync(path.join(__dirname,fileName));  //__dirname ya viene definido en Node.JS y te indica la ruta del archivo 
    const file = fs.readFileSync(filePath,"utf-8");  //utf-8 contiene todos los tipos de caracteres
    return file;
}

function setContentFile(filePath,data){  //fileName es toda la ruta del archivo que quiero acceder.
    const file = fs.appendFileSync(filePath,data);  //data que se le va a agregar a ese archivo
    //si el archivo existe, le agrega la data, sino lo crea.
    // fs.writeFileSync() sobreescribe;    
}

module.exports = {
    getContentFile : getContentFile,
    setContentFile : setContentFile
};