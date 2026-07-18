import React from 'react'
import { useOutletContext } from 'react-router-dom';

const NoFiccion = () => {
  const librosIniciales = useOutletContext();

  return (
    <>
      <h2>No Ficción</h2>
      <div>
        {librosIniciales
          .filter((book) => book.categoria === "NoFicción")
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

export default NoFiccion;
