import React, { useState } from 'react';

function App() {
  const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null]);
  const [jugador1, setJugador1] = useState('Jugador 1');
  const [jugador2, setJugador2] = useState('Jugador 2');
  const [modo, setModo] = useState('preparacion');
  const [turno, setTurno] = useState('Jugador 2');

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  const handleClick = () => {
    console.log('Jugador 1:', jugador1);
    console.log('Jugador 2:', jugador2);
    setModo('juego'); 
  };

  const botonpresionado = (index) => {
    const nuevoArreglo = [...arreglo]; 
    if (nuevoArreglo[index] === null) {
      nuevoArreglo[index] = turno === jugador2 ? 'X' : 'O';
      setTurno(turno === jugador2 ? jugador1 : jugador2);
      setArreglo(nuevoArreglo); 
      checkWinner(nuevoArreglo);
    }
  };

  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`¡${board[a]} ha ganado!`);
        resetGame();
        return;
      }
    }

    // Si todos los espacios estan llenos y no hay ganador es empate
    if (board.every(cell => cell !== null)) {
      alert("¡Es un empate!");
      resetGame();
    }
  };

  const resetGame = () => {
    setArreglo([null, null, null, null, null, null, null, null, null]);
    setTurno('')
  };

  return (
    <>
      {modo === 'preparacion' ? (
        <>
          <img
            src="https://wallpapers.com/images/hd/pc-gaming-logos-n60oi65j885nl2a8.jpg"
            alt="fondo"
            className="picture"
          />
          <div className="inicio">
            <h1>Bienvenido</h1>
            <h1>Jugador 1</h1>
            <input
              className="input"
              type="text"
              value={jugador1}
              onChange={(e) => setJugador1(e.target.value)}
            />
            <h1>Jugador 2</h1>
            <input
              className="input"
              type="text"
              value={jugador2}
              onChange={(e) => setJugador2(e.target.value)}
            />
            <button className="btn" onClick={handleClick}>
              ¡¡¡Empezar!!!
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src="https://image.slidesdocs.com/responsive-images/background/3d-gamepad-illustration-for-gaming-enthusiasts-powerpoint-background_4be585a78a__960_540.jpg"
            alt="fondo"
            className="picture"
          />
          <div className="juego">
            <h1>¡El juego ha comenzado!</h1>
            <p>Jugadores: {jugador1} y {jugador2}</p>
            <div className="botones">
              {arreglo.map((valor, index) => (
                <div
                  key={index} 
                  className="boton"
                  onClick={() => botonpresionado(index)} 
                >
                  {valor}
                </div>
              ))}
            </div>
            <p>Te toca {turno}</p>
          </div>
        </>
      )}
    </>
  );
}

export default App;