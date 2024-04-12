function Pelicula(id,rating,awards,length,price,genre){
    this.id = id;
    this.rating = rating;
    this.awards = awards;
    this.length = length;
    this.price = price;
    this.genre = genre; //[accion, animación, aventuras, comedia, suspenso]
}
let genre = ["AcciÓn", "Animación", "Aventuras", "Comedia", "Suspenso"];

let ToyStory = new Pelicula(1,10,2,"2HS",1200.00,genre[1]);
let BarbieGirl = new Pelicula(2,10,1,"2:30HS",1200.00,genre[1]);
let TheAvengers = new Pelicula(3,10,3,"3HS",1200.00,genre[0]);
let SpyderMan = new Pelicula(4,10,4,"1:30HS",1200.00,genre[0]);
let Rocky6 = new Pelicula(5,1,2,"2HS",2200.00,genre[0]);

let peliculas = [ToyStory,BarbieGirl,TheAvengers,SpyderMan,Rocky6];
module.exports = peliculas; 