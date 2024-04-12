
const h1 = document.querySelector('h1');

const darkMode = confirm('¿Desea modo oscuro?');  //confirm en lugar de prompt
if(darkMode){
    document.body.style.backgroundColor = '#7f7f7f';
    document.body.classList.add('fondoMoviesList'); 
}

//Aplicarle estilos al 
h1.innerText += "LISTADO DE PELÍCULAS";
h1.classList.add('moviesListTitulo');