
function factorial(numero){
    if(numero <= 1){
        return 1;
    }else{
        let valor = 1;
        for (let index = 1; index <= numero; index++) {
            valor *= index;
        }
        return valor;
    }
}
function factorial2(numero){
    if(numero<=1){
        return 1;
    }else{
        return numero*factorial2(numero-1);
    }
}

//console.log(factorial2(7));
const N = 10; // Número de repeticiones

let total1 = 0;
let total2 = 0;

for (let i = 0; i < N; i++) {
    let t1 = process.hrtime();
    // Aquí va el código del primer algoritmo
    console.log(factorial2(60));
    let t2 = process.hrtime(t1);
    total1 += t2[0] * 1e9 + t2[1];

    let t3 = process.hrtime();
    // Aquí va el código del segundo algoritmo
    console.log(factorial(60));
    let t4 = process.hrtime(t3);
    total2 += t4[0] * 1e9 + t4[1];
}

console.log(`Promedio algoritmo 1: ${(total1 / N) / 1e6}ms`);
console.log(`Promedio algoritmo 2: ${(total2 / N) / 1e6}ms`);

// console.time("Ejecución algoritmo 1");
// console.log(factorial2(60));
// console.timeEnd("Ejecución algoritmo 1");

// console.time("Ejecución algoritmo 2");
// console.log(factorial(60));
// console.timeEnd("Ejecución algoritmo 2");

function ultimaPalabra(texto){
    let palabra = "";
    for(let i = texto.length-1; i>=0; i--){
        if(texto[i] === " "){
            return palabra;
        }
        palabra = texto[i] + palabra;
    }
    return palabra;
}
console.log(ultimaPalabra("Hola, soy Lucas Garcia."));