function reporteDePasajeros(estacion){
    let pasajeros = 200;
    let mensaje = ["En la estación 0 hay 200 pasajeros arriba del tren"];
    let suben = 50;
    let bajan = 30;
    for(let i = 1; i<=estacion;i++){
        pasajeros = (i === 5)? pasajeros + 120 - 80: pasajeros + suben - bajan; 
        mensaje.push("En la estación "+i+" hay "+ pasajeros+" pasajeros arriba del tren");
    }
    return mensaje;
}
console.log(reporteDePasajeros(11));
