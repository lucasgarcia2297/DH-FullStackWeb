const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': (req, res) => {
        return res.send('Devuelve la información de todas las canciones resgitradas en nuestra plataforma, tomando en cuenta las asociaciones de estas con el genero y el tipo de medio utilizado.');
    }
}
module.exports = cancionesAPIController;