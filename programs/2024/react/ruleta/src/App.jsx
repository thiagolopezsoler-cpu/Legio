import React, { useState } from 'react';

export const App = () => {
  //cambio el modo de juego
  const [mode, setMode] = useState('start');
  //almaceno el nombre de los participantes
  const [participants, setParticipants] = useState([]);
  //para agregar los nuevos participantes
  const [inputValue, setInputValue] = useState('');
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);
  const addParticipants = () => {
    const newParticipant = inputValue;
//agrega los participantes
    if (newParticipant) {
      setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
      setInputValue('');
    }
    console.log(participants);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addParticipants();
    }
  };

  const startGame = () => {
    if (participants.length > 0) {
      setMode('roulette');
    } else {
      alert('Please add at least one participant!');
    }
    addParticipants();
  };
  

  const getParticipantStyle = (index, total) => {
    const angle = (360 / total) * index; // Ángulo para cada nombre
    const radians = (angle * Math.PI) / 180; // Convierte a radianes
    const radius = 150; // Radio del círculo

    const x = Math.cos(radians) * radius; // Coordenada X
    const y = Math.sin(radians) * radius; // Coordenada Y

    return {
      position: 'absolute',
      transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`, // Posición + Rotación
      transformOrigin: 'center', // Asegura que gire alrededor de su centro
    };
  };
  
  const backToStart = () => {
    setMode('start')
  }

  const spinRoulette = () => {
    const totalParticipants = participants.length;
    const randomSpin = Math.floor(Math.random() * 360) + 360 * 5; // Rotación aleatoria
    const winningIndex = Math.floor((randomSpin % 360) / (360 / totalParticipants)); // Índice ganador
    setRotation(randomSpin);
    setTimeout(() => {
      setWinner(participants[totalParticipants - 1 - winningIndex]);
    }, 5000); // Tiempo de la animación
  };
  return (
    <div>
      {mode === 'start' ? (
        <div className='start'>
          <h1 className='titule'>Welcome to the best roulette</h1>
          <input
            type="text"
            className='input'
            value={inputValue}
            placeholder='Enter the participants here, please'
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className='button' onClick={addParticipants}>Enter participant</button>
          <button className='button' onClick={startGame}>Ready?</button>
          <p>Jugadores actuales:   {participants}</p>
        </div>
      ) : (
        <div className='game'>
          <button onClick={backToStart} className='button'>back to start</button>
          <div className='roulette'>
            {participants.map((participant, index) => (
              <div
                key={index}
                className='name'
                style={getParticipantStyle(index, participants.length)}
              >
                {participant}
              </div>
            ))}
          </div>
          <button className='button' onClick={spinRoulette}>sping</button>
        </div>
      )}
    </div>
  );
};

export default App;