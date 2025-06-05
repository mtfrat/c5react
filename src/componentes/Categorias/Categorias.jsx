import React, { useEffect, useState } from 'react'

const Categorias = () => {

    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        document.title = `Categoria ${categoria}`;
    }, [categoria])

    const manejadoraCategorias = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <div>
        <button onClick={() => manejadoraCategorias("Frutas")}>Frutas</button>
        <button onClick={() => manejadoraCategorias("Carnes")}>Carnes</button>
        <button onClick={() => manejadoraCategorias("Lacteos")}>Lacteos</button>
        <button onClick={() => manejadoraCategorias("Limpieza")}>Limpieza</button>
    </div>
  )
}

export default Categorias