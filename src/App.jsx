import React from 'react'
import PersonaProps from './componentes/PersonaProps/PersonaProps'
import Articulos from './componentes/Articulos/Articulos'
import Contador from './componentes/Contador/Contador'
import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder'
import Categorias from './componentes/Categorias/Categorias'
import UseRef from './componentes/UseRef/UseRef'

const App = () => {
  return (
    <div>
      {/* <PersonaProps nombre="Juan" edad={20} />
      <Articulos img="https://placedog.net/400/551?id=118" titulo="Perritos"/>
      <Articulos img="https://placedog.net/400/288?id=142" titulo="Adopta"/>
      <Articulos img="https://placedog.net/400/175?id=58" titulo="Compra comida"/>
      <Articulos img="https://placedog.net/400/331?id=22" titulo="Dona">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat vero, unde facilis asperiores dolorum totam illum nemo quibusdam et laudantium hic. Corrupti assumenda obcaecati tenetur, a quis praesentium hic officiis!</p>
        <strong>Tiempo de lectura: 3 minutos</strong>
      </Articulos> */}
      {/* <Contador/>
      <JsonPlaceHolder/> 
      
      <Categorias/>
       */}
      <UseRef/>
    </div>
  )
}

export default App