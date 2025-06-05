import React from 'react'
import { useRef } from 'react';

const UseRef = () => {

    const contadorCarrito = useRef(0);

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <p>Productos en carrito: {contadorCarrito.current}</p>
        <button onClick={agregarAlCarrito}> Agregar un nuevo producto</button>
    </div>
  )
}

export default UseRef