//Clase 5 - Funciones
//Microdesafio 1 

function alquiler(tipoVehiculo,dias,sillaBebe) {
    let total = 0;
    switch (tipoVehiculo) {
        case "Compacto":
            total = 14000 * dias;
            break;
    
        case "Compacto":
            total = 14000 * dias;                
            break;
        case "Mediano":
            total = 17000 * dias;                
            break;
        case "Camioneta":
            total = 28000 * dias;                
            break;
        default:
            return "El tipo de vehiculo es incorrecto. Debe ser Compacto, Mediano o Camioneta.";
    }

    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${dias} días utilizados. `;
    if(sillaBebe){
        total += 1200 * dias;
        mensaje += "Además, perdiste una silla para bebé. ";
    }
    mensaje += `El monto total a pagar es de $${total}`;

    //otra forma con operador ternario:
//  total = sillaBebe ? total += 12000*dias : total;
    //otra forma similar al operador ternario
//  sillaBebe && (total += 1200 * dias);

    return mensaje;
}

console.log(alquiler("Mediano",10,true));
console.log(alquiler("Mediano",10,false));
console.log(alquiler("Camion",10,false));
