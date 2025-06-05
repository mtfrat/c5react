import React, { useEffect, useState } from 'react'

const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);  //Valor inicial array vacio []

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div>JsonPlaceHolder</div>
  )
}

export default JsonPlaceHolder