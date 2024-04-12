//Clase 6 - Arrays y Strings
//Microdesafio 1 

let electrodomesticos = ["Televisor", "Heladera","Microondas","Pava electrica","Licuadora","Lavarropas"];

console.log(electrodomesticos[3],'\n',electrodomesticos[5],'\n',electrodomesticos[1],'\n');

//Extraer el primer elemento del array y agregarlo al final del mismo.
//const primerElemento = electrodomesticos.shift();
//electrodomesticos.push(primerElemento); 
electrodomesticos.push(electrodomesticos.shift()); //Otra forma

//Agregar al final del array dos elementos
electrodomesticos.push("Radio","Batidora");

//Mostrar por consola la cantidad de elementos que tiene el array
console.log(electrodomesticos.length);

//Buscar un elemento 
if(electrodomesticos.includes("Batidora")){
    console.log("Producto encontrado.\n");
}else{
    console.log("El producto buscado no existe.\n");
}
//Otra forma
// if(electrodomesticos.indexOf("Batidora") == -1 ){
//     console.log("El producto buscado no existe.\n");
// }else{   
//      console.log("Producto encontrado.\n");
// }
console.log(electrodomesticos);

//Lo hago con coma para que me deje separarlo luego con el split
let texto = electrodomesticos.join(',');
console.log(texto);

//Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log(texto.length);

//Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
texto = texto.replace("Televisor","Tv");
console.log(texto);

let textoArray = texto.split(",");
console.log(textoArray);
