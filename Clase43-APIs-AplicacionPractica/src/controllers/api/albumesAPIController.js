const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': async (req, res) => {
        try {
            const albumes = await db.Album.findAll({ include: ['artistas']});
            // const albumes = await db.Album.findAll({include: [{    //para excluir ciertos campos
            //     model: db.Artista,
            //     as: 'artista',
            //     attributes: { exclude: ['created_at', 'update_at']}  //se excluyen created_at y update_at
            // }]});

            // const albumes = await db.Album.findAll({ atributtes: {exclude: ['created_at', 'update_at']},include: ['artistas']}); //otra forma más corta
            return res.json(albumes);
        } catch (error) {
            return res.status(500).send(error)
        }
    },

    'detail': async (req, res) => {
        try {
            const album = await db.Album.findOne();
        } catch (error) {
            return res.status(500).send(error);            
        }
        return res.send('Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string.');
    }
}

module.exports = albumesAPIController;