const autoImportados = require("./autos");

const concesionaria = {
   autos: autoImportados,
   buscarAuto: function(patente) {
      const auto = this.autos.find((auto) => auto.patente === patente);
      return auto || null;
   },
   venderAuto: function(patente){
      const auto = this.buscarAuto(patente);
      if(auto){
         auto.vendido = true;
      }
   },
   autosParaLaVenta: function(){
      return this.autos.filter((auto) => auto.vendido === false);
   },
   autosNuevos: function(){
      const autosAVender = this.autosParaLaVenta();
      return autosAVender.filter((auto) => auto.km < 100);
   },
   listaDeVentas: function(){
      const autosVendidos = this.autos.filter((auto) => auto.vendido === true);
      return autosVendidos.map((auto) => auto.precio);
   },
   totalDeVentas: function(){
      const ventas = this.listaDeVentas();
      return ventas.reduce((acum, precio) => { return acum + precio},0);
   },
   puedeComprar:function(auto, persona){
      let respuesta = false;
      if(((auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas) && (auto.precio <= persona.capacidadDePagoTotal)){
         respuesta = true;
      }
      return respuesta;
   },
   autosQuePuedeComprar: function(persona){
      const autosAVender = this.autosParaLaVenta();
      return autosAVender.filter((auto) => this.puedeComprar(auto,persona));

   }
   
}

console.log(concesionaria.autosNuevos());