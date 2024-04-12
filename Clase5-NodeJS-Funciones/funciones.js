//---------------------------------------------------------
//Diferencia entre funciones clasicas y funciones flecha (arrow functions)
let valor = 21;
let obj = { 
    valor:10,
    mostrar: function(){
      console.log(this.valor);
    },
    mostrar2: () => console.log(this.valor) //No reconoce el valor del this
    }

obj.mostrar();
obj.mostrar2();
//---------------------------------------------------------

//================Callbacks================

//Ejemplo: Callback anónimo. Le paso la definición de la función como parametro
//setTimeout recibe un callback. Puedo pasarle un arrow function o la función clasica
setTimeout(() => {console.log("Se ejecuto el callback!")}, 3000);

//Ejemplo: Callback definidos. Lo defino como una función aparte y luego se lo paso a la función que voy a usar.
function imprimirHola(nombre,apellido){
  console.log("Hola "+nombre+" "+apellido);
}
setTimeout(imprimirHola,"Lucas","Garcia",4000);