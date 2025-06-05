import React from 'react'

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt="perros locos" />
        <h2>{titulo}</h2>
        <button>Leer</button>
        <br />
        {children}
    </article>
  )
}

export default Articulos