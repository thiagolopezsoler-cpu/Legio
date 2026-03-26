import React from 'react'
import { Link } from 'react-router-dom';

const All = () => {
  const peliculas = [
    {
      id: 1,
      titulo: "Matrix",
      director: "Lana y Lilly Wachowski",
      año: 1999,
      descripcion: "Un hacker descubre la verdad detrás de la realidad simulada en la que vive y lidera la rebelión contra las máquinas."
    },
    {
      id: 2,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director: "Peter Jackson",
      año: 2001,
      descripcion: "Un hobbit hereda un anillo poderoso y emprende una peligrosa misión para destruirlo antes de que caiga en manos del enemigo."
    },
    {
      id: 3,
      titulo: "Inception",
      director: "Christopher Nolan",
      año: 2010,
      descripcion: "Un ladrón especializado en infiltrarse en los sueños debe cumplir una misión imposible: implantar una idea en la mente de alguien."
    },
    {
      id: 4,
      titulo: "Pulp Fiction",
      director: "Quentin Tarantino",
      año: 1994,
      descripcion: "Historias entrelazadas de criminales, boxeadores y gánsteres en Los Ángeles, narradas con un estilo único y no lineal."
    },
    {
      id: 5,
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: 2014,
      descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    }
  ];


  return (
    <>
      <h1>All the movies</h1>
      <div>{peliculas.map(movie => (
        <div key={movie.id}>
          <h2>{movie.titulo}</h2>
          <Link to={`/movies/${movie.id}`}>Descripcion</Link>
        </div>
        
      ))}</div>
    </>
  )
}

export default All