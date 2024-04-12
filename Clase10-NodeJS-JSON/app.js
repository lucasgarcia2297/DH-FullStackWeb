const bikes = require("./datosBici.js");

const dhBici = {
    bicicletas : bikes.bikes,

    // 2-a)
    buscarBici : function (id){
        return this.bicicletas.find((bici) => bici.id === id) || null;
    },

    // 2-b)
    venderBici : function (id){
        const bici = this.buscarBici(id);
        if(bici) {
            bici.vendida = true;
            bikes.guardarDatos(this.bicicletas);
            return bici;
        }else{
            return "Bicicleta no encontrada.";
        }
       
    },
    //2-c)
    biciParaLaVenta : function () {
        return this.bicicletas.filter(bike => bike.vendida === false);
    },
    //2-d)
    totalDeVentas : function () {
        const vendidas = this.bicicletas.filter(bike => bike.vendida === true);
        return vendidas.reduce((acum,actual) => acum+actual.precio,0);
    }
};

// 2-a)
console.log(dhBici.buscarBici(1));
// 2-b)
console.log(dhBici.venderBici(7));
// 2-c)
console.log(dhBici.biciParaLaVenta()); 
// 2-d)
console.log(dhBici.totalDeVentas()); 
