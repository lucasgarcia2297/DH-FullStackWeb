const db = require('../../database/models');
const sequelize = db.sequelize;


const moviesController = {
    create: (req, res) => {
        db.Movie.create(req.body)
            .then(movie => {
                res.json({
                        "status": 200,
                        "data": movie,
                        "created": "ok"
                    }
                )
            })
    },
    destroy: (req, res) => {
        db.Movie.destroy(
            {where: {
                id: req.params.id
            }})            
            .then(movie => {
                res.json(movie);
            });
    }

}

module.exports = moviesController;