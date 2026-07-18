import React, { useState } from 'react';

function App() {
  //el arreglo para guardar las x u o
  const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null]);
  //los nombres de los jugadores
  const [jugador1, setJugador1] = useState('Jugador 1');
  const [jugador2, setJugador2] = useState('Jugador 2');
  //creo dos modos de juego para poner el nombre y otro para jugar
  const [modo, setModo] = useState('preparacion');
  //es para definir si se pone x u o y para q avise a quien le toca
  const [turno, setTurno] = useState('');
  //es para sumar los puntos teniendo un contador
  const [puntosj2, setPuntosj2] = useState(0);
  const [puntosj1, setPuntosj1] = useState(0);


  //son todas las combinaciones pocibles para saber si hay un ganador o algo
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];
//cambia el modo de poner el nombre a el para jugar
  const handleClick = () => {
    console.log('Jugador 1:', jugador1);
    console.log('Jugador 2:', jugador2);
    setModo('juego'); 
  };
//es para poner las x u o creando un nuevo arreglo, modificando el anterior y activa la funcion para ver si alguien gano
  const botonpresionado = (index) => {
    const nuevoArreglo = [...arreglo]; 
    if (nuevoArreglo[index] === null) {
      nuevoArreglo[index] = turno === jugador2 ? 'X' : 'O';
      setTurno(turno === jugador2 ? jugador1 : jugador2);
      setArreglo(nuevoArreglo); 
      checkWinner(nuevoArreglo);
    }
  };
// prueba todas las combinaciones pocibles rebisando si son todas x u o 
  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === 'O') {  // Cambié 'x' por 'X'
          alert(jugador1 + " ganó");
          setPuntosj1((prevPuntosj1) => prevPuntosj1 + 1);  // Sumar puntos a Jugador 1
          console.log(puntosj1);
        } else {
          alert(jugador2 + " ganó");
          setPuntosj2((prevPuntosj2) => prevPuntosj2 + 1);  // Sumar puntos a Jugador 2
          console.log(puntosj2);
          resetGame();
          return;
        }
        }
    }

    // rebiza cada parate de los board y si estan todos las partes del arreglo llenas da mensaje de empate
    if (board.every(cell => cell !== null)) {
      alert("¡Es un empate!");
      resetGame();
    }
  };

  const resetGame = () => {
    setArreglo([null, null, null, null, null, null, null, null, null]);
    setTurno('Jugador 2');  // Asegurarse de reiniciar el turno
  };

  const reiniciar = () =>{
    setModo('preparacion')
  }
  const reiniciarcontador = () => {
    setPuntosj1(0);
    setPuntosj2(0);
  }

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
              placeholder='jugador 1'
              onChange={(e) => setJugador1(e.target.value)}
            />
            <h1>Jugador 2</h1>
            <input
              className="input"
              type="text"
              placeholder='jugador 2'
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
            <button className='btn' onClick={reiniciar}>volver</button>
            <button className='btn' onClick={reiniciarcontador}>reiniciar contador</button>
            <p>{jugador1} tiene: {puntosj1} puntos</p>
            <p>{jugador2} tiene: {puntosj2} puntos</p>
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