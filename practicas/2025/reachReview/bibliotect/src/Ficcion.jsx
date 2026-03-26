import React from 'react'
import { useOutletContext } from 'react-router-dom';



const Ficcion = () => {
    const librosIniciales = useOutletContext();

    return (
        <>
            <h2>Ficcion</h2>
            <div>
                {
                    librosIniciales.filter((book) => book.categoria === "Ficción")
                        .map((book, index) => (
                            <div key={index}>
                                <h3>{book.titulo}</h3>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Ficcion