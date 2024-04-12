#CURSO FULL STACK WEB - BASE DE DATOS#
#CLASE 36 - Uniones y funciones de abreviación#
use movies_db;

/*Micro desafío - Paso 1:*/
Select s.title as Título, g.name as Género 
	from series s inner join genres g 
    on s.genre_id = g.id;
    
/*Forma antigua: */
Select s.title as Título, g.name as Género 
	from series s, genres g 
    where s.genre_id = g.id;
    
    
Select concat(a.first_name,' ', a.last_name) as Nombre_Y_Apellido, e.title as Episodio
	from episodes e 
    inner join actor_episode ae on e.id=ae.episode_id
    inner join actors a on a.id = ae.actor_id;
/*===================================================================================================*/
/*===================================================================================================*/
/*MICRO DESAFÍO - PASO 2:*/
/*---------------------------------------------------------------------------------------------------*/
SELECT DISTINCT a.first_name, a.last_name 
FROM actors a, actor_movie am, movies m
WHERE a.id = am.actor_id AND m.id = am.movie_id AND m.title like "%la guerra%";
 
/*Otra forma (mas correcta)*/ 
SELECT DISTINCT a.first_name, a.last_name, m.title 
FROM actors a
INNER JOIN actor_movie am ON a.id = am.actor_id
INNER JOIN movies m ON m.id = am.movie_id
WHERE m.title like "la guerra de las galaxias%";
/*===================================================================================================*/
/*===================================================================================================*/
/*MICRO DESAFÍO - PASO 3:*/
/*---------------------------------------------------------------------------------------------------*/
SELECT m.title as Título, COALESCE(g.name, 'No tiene género') as Genero
FROM movies m
LEFT JOIN genres g on m.genre_id = g.id;

/*===================================================================================================*/
/*===================================================================================================*/
/*MICRO DESAFÍO - PASO 4:*/
/*---------------------------------------------------------------------------------------------------*/
SELECT s.title, DATEDIFF(end_date, release_date) as duration
FROM series s;
/*===================================================================================================*/
/*===================================================================================================*/
/*MICRO DESAFÍO - PASO 5:*/
/*---------------------------------------------------------------------------------------------------*/
/*Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.*/
SELECT *
FROM actors a
WHERE LENGTH(first_name) > 6
ORDER BY first_name;

/*Debemos mostrar la cantidad total de los episodios guardados en la base de datos.*/
SELECT COUNT(id) as Cantidad_Episodios
FROM episodes;

/*Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total de temporadas que tiene cada una de ellas.*/
SELECT s.title as Titulo, COUNT(s.id) "Cantidad de Temporadas"
FROM series s 
INNER JOIN seasons s2 ON s.id = s2.serie_id
GROUP BY s.id;

/*Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor o igual a 3.*/
SELECT g.name, count(g.id) "Total Películas"
FROM genres g
INNER JOIN movies m on m.genre_id = g.id
GROUP BY g.id HAVING COUNT(g.id) >= 3;