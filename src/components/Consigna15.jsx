import { useState } from 'react'
import dataJson from '../assets/data.json'


const Consigna15 = () => {

    const [data, setData] = useState(dataJson)
    const [mostrarResultado, setMostrarResultado] = useState(false)

    const [editarBtn, setEditarBtn] = useState(false)

    const eliminarPersona = (id) => {
        console.log('eliminarPersona', id)
        setData([...data].filter(persona => persona.id !== id))
    }

    const editarPersona = (id) => {
        console.log('editarPersona', id)
        let persona = data.find(person => person.id === id)
        // console.log(persona)
        setEditarBtn(!editarBtn)
    }

    const confirmarPersona = (id) => {
        console.log('confirmarPersona', id)
        setEditarBtn(!editarBtn)
    }

    return (

        <div className='contenedor-consigna'>

            <p>15-Realice en código React JS una componente que dado un set de datos, los exponga en una grilla y que se permita borrar los elementos con un click.</p>

            <button
                onClick={() => setMostrarResultado(!mostrarResultado)}
                style={{ marginBottom: 25 }}
            >Mostrar resultados</button>
            {
                mostrarResultado
                    ? data.map(persona => {
                        return (
                            <div key={persona.id} className='persona'>
                                <div className='contenedor-nombre'>
                                    <p>{persona.id} {persona.name}</p>
                                </div>

                                {/* contenendor botones */}
                                <div className='contenedor-btn'>

                                    {
                                        editarBtn
                                            ? <button
                                                onClick={() => confirmarPersona(persona.id)}
                                                className='btn confirmar'>confirmar</button>
                                            : <button
                                                onClick={() => editarPersona(persona.id)}
                                                className='btn editar'>editar</button>
                                    }

                                    <button
                                        onClick={() => eliminarPersona(persona.id)}
                                        className='btn eliminar'>eliminar</button>
                                </div>
                            </div>
                        )
                    })
                    : <></>


            }

        </div>
    )
}

export default Consigna15