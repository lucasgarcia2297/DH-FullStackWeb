//Clase 4 - Condicionales
//Microdesafio 4 - calculadora

let resultado = 0;

//LEER POR CONSOLA:
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (nro1) => {
    rl.question('Introduce el segundo número: ', (nro2) => {
        rl.question('Introduce el operador: ', (operador) => {
            console.log(`Has introducido los siguientes valores: ${nro1}, ${nro2}, ${operador} \n`);
          
            switch(operador){
                case "+":
                    resultado = nro1 + nro2;
                    break;
                case "-":
                    resultado = nro1 - nro2;
                    break;
                case "*":
                    resultado = nro1 * nro2;
                    break;
                case "/":
                    resultado = nro1 / nro2;
                    break;
                default:
                    console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")
                    break;    
            }
            console.log("Resultado:\n ",nro1," ",operador," ",nro2, " = ",resultado);
            rl.close();
        });
    });
});

