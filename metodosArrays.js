const productos = [
    { nombre : "Ordenador PC", precio : 699, departamento : "Tecnología"},
    { nombre : "Sartenes Verdes", precio : 39, departamento : "Hogar"},
    { nombre : "Reloj Calculadora", precio : 75, departamento : "Tecnología"},
    { nombre : "Máquina Palomitas", precio : 33, departamento : "Hogar"},
    { nombre : "Mueble TV", precio : 120, departamento : "Hogar"},
    { nombre : "Tuppers", precio : 10, departamento : "Hogar"},
];

//====================MÉTODOS DE ARRAYS================== 

//---------------------------FIND-------------------------
/*Método que se utiliza para buscar el primer elemento que
* coincida con lo que se pida en el callback. 
* - Retorna un ÚNICO elemento del array.
*/
const muebleTV = productos.find(item => {
    //return item.nombre === "Mueble TV";
    return (/Mueble/g).test(item.nombre); //Con EXPRESION REGULAR
});
// console.log(muebleTV); 
//--------------------------------------------------------

//---------------------------MAP-------------------------
/*Método que se utiliza para aplicar una operación (hecha en
*  un callback) a cada elemento del array. 
* - Retorna el mismo o un nuevo array con la operación aplicada.
*   ()
*/
const productosIVA = productos.map(item => {
    item.precio += item.precio * 0.21; 
    return item;
});
console.log(productosIVA);
console.log(productos);  
console.log(muebleTV);  
//--------------------------------------------------------

/*
* Marca (Ford, Fiat, etc). (marca)
* Modelo (Fiesta, Corolla, etc). (modelo)
* Color (Azul, Rojo, etc). (color)
* Año de fabricación. (año)
* Cantidad de kilómetros recorridos. (km)
* Precio final. (precio)
*  Cantidad de cuotas. (cuotas)
* Patente. (patente)
* Vendido: para indicar si el auto está o no vendido. (vendido)
*/

