const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    //Aquí debo modificar para crear la funcionalidad requerida
    buscar:async (req, res)=>{
        try {
            let movies = await db.Movie.findAll({where: {
                title: {
                    [Op.like]: `%${req.body.titulo}%`
                }
            }});
            //si no encuentro la película, busco en la API externa
            if(movies.length === 0){
                const response = await fetch(`http://www.omdbapi.com/?apikey=716fbff2&s=${req.body.titulo}&type=movie`); //tomo solo las películas de la API
                const moviesInOMDB = await response.json();
                if(moviesInOMDB.Error){
                    return res.render('moviesList',{movies:[]});
                }
                
                for (let index = 0; index < moviesInOMDB.Search.length; index++) {
                    const response = await fetch(`http://www.omdbapi.com/?apikey=716fbff2&i=${moviesInOMDB.Search[index].imdbID}`);
                    const data = await response.json();
                    const releaseDate = moment(data.Released).format("YYYY-MM-DD");
                    const length = data.Runtime.split(' ')[0];  //para tomar solo el número de minutos y no la palabra "min"
                    const genreName = data.Genre?.split(', ')[0] || null;
                    const genre = await db.Genre.findOne({where: {name: { [Op.like]: genreName}}});
                    movies.push({
                        title: data.Title,
                        rating: data.imdbRating,
                        //awards: data.Awards, //para este debería contar los números que estan en el string
                        release_date: releaseDate,
                        length,
                        genre_id: genre?.id
                    });
                    // moviesInOMDB.Search[index] = {
                    //     ...moviesInOMDB.Search[index],
                    //     ...data
                    // }
                }
                movies = await db.Movie.bulkCreate(movies);
            }
            return res.render(' ', { movies });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        
        Promise
        .all([promGenres, promActors])
        .then(([allGenres, allActors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesAdd'), {allGenres,allActors})})
        .catch(error => res.send(error))
    },
    create: function (req,res) {
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId,{include: ['genre','actors']});
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        Promise
        .all([promMovies, promGenres, promActors])
        .then(([Movie, allGenres, allActors]) => {
            Movie.release_date = moment(Movie.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let movieId = req.params.id;
        Movies
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;