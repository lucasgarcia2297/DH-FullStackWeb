import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './components/Saludo'
import './App.css'
import TiraPeliculas from './components/TiraPeliculas'
import MiSetup from './components/Setup'

const equipo = ['Monitor', 'Teclado', 'Mouse', 'Headset'];
function App() {
  return (
    // <>
    //   <Saludo
    //     titulo="Hola mundo"
    //     subtitulo="¡Nunca paremos de aprender!"
    //     />
    // </>
    
    // <>
    //   <TiraPeliculas/>
    // </>
    <>
      <MiSetup

      listado={equipo}

      />
    </>
  )
}

export default App
