const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': (req, res) => {
        return res.send('Devuelve datos sobre los generos de las canciones.');
    }
}
module.exports = genresAPIController;