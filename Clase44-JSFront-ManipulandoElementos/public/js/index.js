//CAPTURAR ELEMENTOS
// const main = document.getElementsByTagName('main'); //por nombre de etiqueta: retorna una coleccion de HTML

//Captura el primer elemento por ID o por class de Etiqueta pero le debo pasar el elemento como ID o clase como en CSS.  
// const subtitle = document.querySelector('.conteiner .contenedor h2#subtitulo'); 
const main = document.querySelector('main'); //captura la primer etiqueta que encuentre: retorna un elemento

//Captura por ID de Etiqueta.  
const subtitle = document.getElementById('subtitulo'); 

//Me retorna una colección HTML
// const p = document.getElementsByTagName('p'); 
//captura todas las etiquetas que encuentra: retorna un elemento colección distinta a getElementTagName que es mejor(?)
const p = document.querySelectorAll('p');  //no se debería usar para buscar por ID ya que el ID debe ser único en el DOM

const linkToMovies = document.querySelector('h2 a');

const name = prompt('Ingrese su nombre');


// subtitle.innerText += ' ' + (name || 'Invitado');
subtitle.innerText += name? ` ${name}` : ' Invitado';  //esteticamente correcto(?)
subtitle.innerText = subtitle.innerText.toUpperCase(); 

//Para modificar algo del CSS
linkToMovies.style.color = '#E51B3E';

const addBackground = confirm('Desea colocar un fondo de pantalla?');
if(addBackground){
    document.body.classList.add('fondo');
}

p.forEach((element, index)=> {
    const className = ((index+1) % 2 === 0) ? 'destacadoPar' : 'destacadoImpar';
    element.classList.add(className);   
});

main.style.display = 'block';