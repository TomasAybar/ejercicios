import { useState } from 'react'

const Consigna4 = () => {

    const [mostrarResultado, setMostrarResultado] = useState(false)

    const array = [
        { codigo: '032', pais: 'Argentina' },
        { codigo: '056', pais: 'Belgica' },
        { codigo: '076', pais: 'Brasil' },
        { codigo: '192', pais: 'Cuba' },
        { codigo: '300', pais: 'Grecia' },
        { codigo: '484', pais: 'México' },
        { codigo: '634', pais: 'Qatar' },
    ]

    return (

        <div className='contenedor-consigna'>
            <p>4-Implementa el código necesario para que, dado un array en React que contiene el código de país y el nombre de país, exponga una grilla con dichos datos.</p>

            <button
                onClick={() => setMostrarResultado(!mostrarResultado)}
                style={{ marginBottom: 25 }}>
                Mostrar resultados</button>

            {
                mostrarResultado
                    ?
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Paises</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                array.map(fila => {
                                    return (
                                        <tr key={fila.codigo}>
                                            <td>{fila.codigo}</td>
                                            <td>{fila.pais}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    : <></>
            }
        </div>
    )
}

export default Consigna4