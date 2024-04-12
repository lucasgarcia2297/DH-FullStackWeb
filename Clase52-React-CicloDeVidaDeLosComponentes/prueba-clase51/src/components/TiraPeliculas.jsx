import React from 'react';
import Pelicula from './Pelicula';

function TiraPeliculas() {
    return (
        <div> 
            <Pelicula titulo="Harry Potter" rating="9.0" generos={["Fantasia", "Aventuras"]}/>
            <Pelicula titulo="Toys Story" rating="8.5" generos={["Familiar", "Animación"]}/>
            <Pelicula titulo="Parasite" rating="7.0" generos={["Drama"]}/>
            <Pelicula titulo="Transformers" rating="6.0" generos={["Acción", "Aventuras"]}/>
        </div>
    );
  }

export default TiraPeliculas;