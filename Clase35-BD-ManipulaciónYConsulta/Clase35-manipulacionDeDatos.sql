use movies_db;

/*insert into genres values(null,null,null,'Investigación',13,true); */
insert into genres(name, ranking, active) values ('Investigación', 13,true);

update genres set name = 'Investigación Científica' where id=13;

delete from genres where id=13;
select * from users where delete_at != NULL;


/*Mostrar todos los registros de la tabla movies*/
select * from movies;

/*Mostrar el nombre, apellido y rating de los actores*/
select first_name as Nombre, last_name as Apellido, rating from actors;

/*Mostrar el título de todas las series*/
select title AS Título from series;

/*Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7.5*/
select first_name as NOMBRE, last_name as APELLDO 
	from actors 
	where rating > 7.5;

/*Mostrar el titulo de las peliculas y rating ordenado de forma ascendente*/
select title, rating from movies order by rating asc;


/*Microdesafío 3 - Limit y Offset*/
select id, title from movies order by id desc limit 3;

/*2. Mostrar el  */
select * from movies order by rating desc limit 5; 

/*3. */
select * from movies order by rating desc limit 5 offset 5; 

#Paginado usando offset
/**/
select * from actors limit 10 offset 0; /*Mostrame 10 iniciando desde el inicio*/
select * from actors limit 10 offset 10; /*Mostrame 10 inciando desde el 11*/

/*Mostrar todos los titulos */
select title, rating from movies where title like '%harry potter%';

/*Todos los actores que empiecen con nombre "Sam"*/
select id, concat(first_name,' ',last_name) AS fullname from actors where concat(first_name, ' ',last_name) like "sam%";

/*Mostrar titulo y fecha de lanzamiento de las peliculas donde el AÑO este ENTRE 2004 Y 2008*/
select title, release_date from movies where YEAR(release_date) between 2004 and 2008; 
/*Otras formas*/
select title, release_date from movies where year(release_date) >= 2004 and  year(release_date) <= 2008; 
select title, release_date from movies where release_date > '2004-01-01' and  release_date < '2008-12-31'; 

