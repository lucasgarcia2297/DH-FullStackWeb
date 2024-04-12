const fs = require("fs");

const moment = require("moment");
const path = require("path");

const utils = require("./utils");
const files = require("./files");

const logs = files.getContentFile(path.resolve(__dirname,"logs.txt")); //con path concateno la ruta hasta el archivo, sin preocuparme si trabajo en windows, mac o linux. __dirname viene predefinido en nodejs para encontrar la ruta previa al archivo.
                            //   (path.join(__dirname,"logs.txt")));  Otra forma igual, usar cualquiera de los dos.


files.setContentFile(path.resolve(__dirname,"logs.txt"), `${moment.now()}\n`);
console.log(logs);

console.log((path.resolve(__dirname,"logs.txt")));