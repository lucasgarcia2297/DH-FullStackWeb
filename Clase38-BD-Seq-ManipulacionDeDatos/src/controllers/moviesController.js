const db = require('../database/models');

const controller = {
    async list(req, res) {
        try {
            const movies = await db.Movie.findAll();
            res.render('moviesList', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async detail(req, res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ message: 'Pelicula no encontrada' });
            }
            res.render('moviesDetail', { movie });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async new(req, res) {
        try {
            const movies = await db.Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            });
            res.render('newestMovies', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async recomended(req, res) {
        try {
            const movies = await db.Movie.findAll({
                where: {
                    rating: { [db.Sequelize.Op.gte]: 8 }
                },
                order: [
                    ['rating', 'DESC']
                ]
            })
            res.render('recommendedMovies', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    add(req,res) {
        res.render('moviesAdd');
    },
    create(req,res){
        const newMovie = {
            //como en la tabla se tienen todos los datos puedo hacer destructuring
            ...req.body
        };

        db.Movie.create(newMovie)
            .then(() => {
                return res.redirect('/movies');
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    async edit(req,res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            return res.render('moviesEdit',{Movie: movie});           
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req,res){
        try {
            await db.Movie.update({...req.body}, {where: {id: req.params.id}});
        } catch (error) {
            res.status(500).send(error);            
        }
    },
    async destroy(req,res){
        try {
                        
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = controller;
