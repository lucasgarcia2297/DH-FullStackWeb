const db = require('../database/models');

const controller = {
    //Con Async/Await
    async list(req,res){
        try {
            const movies = await db.Movie.findAll(); //Es como un fillter, si no le pongo un where me retorna todos.           
            res.render('moviesList', {movies});
        } catch (error) {
            res.status(500).send(error);
        }
    },

    //====Con then/catch==============
    // list(req,res) {
    //     db.Movie.findAll()
    //         .then((movies) => {
    //           res.render('movieList',{movies})  
    //         }) 
    //         .catch((error) => {
    //           res.status(500).send(error);  
    //         })
    // },

    async detail(req,res) {
        try {
            //Con findByPK
            const movie = await db.Movie.findByPK(req.params.id);
            //Con findOne
            //const movie = await db.Movie.findOne({where: {id: req.params.id}}); //por si quiero buscar por otro campo
            res.render('movieDetail',{movie});
        } catch (error) {
            res.status(500).send(error);          
        }
    }

};

module.exports = controller;