import React from 'react'

const PersonaProps = ({nombre, edad}) => {
  return (
    <div>
        <h2>Hola soy {nombre}</h2>
        <h2>Tengo {edad}</h2>
    </div>
  )
}

export default PersonaProps