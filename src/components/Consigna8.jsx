import React from 'react'
import { useState, useEffect } from 'react'

const Consigna8 = () => {

    const [usuarios, setUsuarios] = useState()
    const [productos, setProductos] = useState()
    const [mostrarResultado, setMostrarResultado] = useState(false)


    const fetchearData = (url, setState) => {
        fetch(url)
            .then(res => res.json())
            .then(res => setState(res))
    }

    useEffect(() => {
        fetchearData('http://localhost:3000/productos', setProductos);
        fetchearData('http://localhost:3000/usuarios', setUsuarios);
    }, [])







    // console.log('usuarios', usuarios)
    // console.log('productos', productos)

    const likeProducto = (producto) => {
        console.log(producto)
    }

    return (
        <div className='contenedor-consigna'>

            <p>Suponiendo que se tiene un frontEnd, que expone fotos (cada foto tiene su correspondiente ID de foto), y el frontEnd posee un link para realizar un like. Implemente una clase o las que crea necesarias en NodeJS que permitan registrar un like sobre una foto. Nota: Solamente se puede guardar 1 solo like por foto, es decir, que si 2 usuarios dan 1 like cada uno, solo se deberá registrar 1 solo.</p>

            <button
                onClick={() => setMostrarResultado(!mostrarResultado)}
                style={{ marginBottom: 25 }}
            >Mostrar resultados</button>

            {
                mostrarResultado
                    ? <div className='contenedor-productos'>
                        {
                            productos.map(producto => {
                                return (
                                    <div key={producto.id} className='producto'>
                                        <h3>{producto.nombre}</h3>
                                        <img src={producto.url} alt={producto.nombre} />
                                        <button
                                            className='btn-like'
                                            onClick={() => likeProducto(producto)}>❤</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <></>
            }

        </div>
    )
}

export default Consigna8