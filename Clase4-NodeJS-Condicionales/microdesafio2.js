//Clase 4 - Condicionales
//Microdesafio 2 - Ajuste tarifario de energia electrica

let pagoMes = 2350; //pago Actual de Energia Electrica Por Mes;
let consumoKWH = 300.1;
let porcAumento = consumoKWH>300? 20 : 0;
let totalAPagar = pagoMes + (pagoMes*porcAumento)/100;

console.log(`Debido a que su hogar tuvo un consumo de 
            ${consumoKWH}kwh, en base al ajuste tarifario (hogares 
            con consumo mayor a 300kwh por mes tendrán un 
            aumento del ${porcAumento}%), cumplimos con informarle que 
            se ha ajustado el total a pagar, que será de 
            $${totalAPagar}`);