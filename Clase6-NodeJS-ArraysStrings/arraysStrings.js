let array = [1, "hola", [1 ,2, 3.8, 4], true];
let obj = {nombre : "Juan Carlo", apellido: "Dominguez"};
let tamanioNuevo = array.push(obj, 1.3);
//console.log(tamanioNuevo);
//console.log(array[4]);

console.log(array.toString());
console.log(tamanioNuevo.propertyIsEnumerable());

console.log(array.length);
array.length = 10;
console.log(array.length);
console.log(array);

let arr = new Array(10);
arr[7] = "hola";
arr[2] = "saa";
arr[15] = "dsa";
console.log(arr[14]);

//Práctica con Strings
//Buscar una cadena dentro de un strings.
let mensaje = "Hola mundo!";
console.log(mensaje.indexOf("mund"));       //Retorna 5, indice donde empieza la palabra buscada
console.log(mensaje.indexOf("Mengueche"));  //Retorna -1 porque no lo encontró 

//Slice  -- mensaje.slice(indiceDesde, Opcional: indiceHastaSinIncluir)
console.log(mensaje.slice(5,mensaje.length-1));
console.log(mensaje.slice(5,10));
console.log(mensaje.slice(-6,-1)); 
console.log(mensaje.slice(5));

//Trim
let frase = "  Trim elimina los espacios iniciales y finales, sin modificar la variable    ";
console.log(frase.trim());

//split --Convierte de String a Array
let fraseArray = frase.split(); //por defecto no separa, la cadena vacía ""
console.log(fraseArray);
fraseArray = frase.split(" ");
console.log(fraseArray);
fraseArray = frase.split("a");
console.log(fraseArray);

//Replace
let fraseModificada = frase.replace("Trim elimina los espacios iniciales y finales", "Replace reemplaza una cadena por otra");
console.log(fraseModificada);
fraseModificada = frase.replace("Esta frase no está", "no reemplaza nada");
console.log(fraseModificada);



//includes - Combinado con arrow functions
let menciona = (texto,palabra) => {
    let respuesta = texto.includes(palabra)? true : false;
    return respuesta;
}
console.log(menciona("hola mundo", "mundo"));
