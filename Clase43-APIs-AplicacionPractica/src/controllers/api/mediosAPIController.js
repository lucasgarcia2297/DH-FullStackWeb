const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': (req, res) => {
        return res.send('Devuelve la información sobre los tipos de medios utilizados en el grabado de las canciones.');
    }
}
module.exports = mediosAPIController;