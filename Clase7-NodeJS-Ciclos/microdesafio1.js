//Clase 7 - Ciclos
//Microdesafio 1

//Saldo Bancario: 
//Numero positivo: depositos. Numero negativo: retiros.
const operacionesBancarias = [
    1000,
    2000,
    -500,
    5000,
    -2000,
    2800,
    -400,
    10500,
    -4700,
    -3800
];
const operacionesBancarias2 = [
    -1000,
    -2000,
    -500,
    -5000,
    -2000,
    2800,
    -400,
    10500,
    -4700,
    -3800
];
/***    
 * @param {array} operaciones
 * @returns {array} 0-> depositos |  1 -> retiros |  2 -> saldoActual
 */
function calcularSaldos(operaciones) {
    let depositos = 0;
    let retiros = 0;
    for (let i = 0; i < operaciones.length; i++) {
        if(operaciones[i]<0){
            retiros += operaciones[i];
        }else{
            depositos += operaciones[i];
        }
    }
    return [depositos, -1*retiros, depositos+retiros];
}

function calcularSaldosEnDolares(operaciones) {
    let valorDolar = 271.63;
    let depositos = 0;
    let retiros = 0;
    for (let i = 0; i < operaciones.length; i++) {
        if(operaciones[i]<0){
            retiros += operaciones[i];
        }else{
            depositos += operaciones[i];
        }
    }
    return [(depositos/valorDolar).toFixed(2), (-1*retiros/valorDolar).toFixed(2), ((depositos+retiros)/valorDolar).toFixed(2)];
}

/**
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {array} operaciones
 * @param {function} callback
 * @returns {array} 0 -> nombreCompleto | 1 -> depositos | 2 -> retiros | 3 -> saldoActual 
 */
function obtenerEstadoDeCuenta(nombre, apellido,operaciones,callback){
    const saldos = callback(operaciones);
    const nombreCompleto = nombre + " " + apellido;
    const depositos = saldos[0];
    const retiros = saldos[1];
    const saldoActual = saldos[2];

    return [nombreCompleto, depositos, retiros, saldoActual];
}

const resumen1 = obtenerEstadoDeCuenta("Pepe", "Argento",operacionesBancarias, calcularSaldos);
const resumen2 = obtenerEstadoDeCuenta("Pepe", "Argento",operacionesBancarias, calcularSaldosEnDolares);
//console.log(resumen);
console.log(`Estimad@ ${resumen1[0]} : 
            El monto total de los depósitos es de: $${resumen1[1]}.
            El monto total de los retiros es de: $${resumen1[2]}.
            Por lo tanto, su saldo actual en la cuenta es de: $${resumen1[3]}.
            `);
console.log(`Estimad@ ${resumen2[0]} : 
            El monto total en DOLARES de los depósitos es de: USD$${resumen2[1]}.
            El monto total en DOLARES de los retiros es de: USD$${resumen2[2]}.
            Por lo tanto, su saldo actual en la cuenta en DOLARES es de: USD$${resumen2[3]}.
            `);