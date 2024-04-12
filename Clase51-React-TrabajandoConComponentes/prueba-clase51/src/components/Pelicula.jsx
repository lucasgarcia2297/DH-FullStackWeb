import React from 'react';

function Pelicula(props) {
   return (
        <div> 
            <h2 className='titulo'>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <ul>
                { props.generos.map( (genero,i) => <li key={genero+i}> {genero} </li>)}
            </ul>
        </div>
    );
  }

export default Pelicula;