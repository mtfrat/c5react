import React from 'react'
import { useState, useEffect } from 'react'


const Contador = () => {

    const [contador, setContador] = useState(1);

    useEffect(() => {
        //Logica para cambiar el titulo de la pagina -> funcion callback
        document.title = `Contador: ${contador}`;
    },[contador]) //Cada vez que el contador cambia, se actualiza la pagina

    //Funciones auxiliares

    let stock = 10;

    const incrementar = () => {
        if (contador<10){
        setContador (contador + 1);
        }
    }

    const decrementar = () => {
        if (contador>0){
            setContador (contador - 1);
        }
    }

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <br />
            <button>Terminar compra</button>
        </div>
    )
}

export default Contador