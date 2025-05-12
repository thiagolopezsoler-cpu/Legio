import React, { useState } from 'react';

export const App = () => {
  const [mode, setMode] = useState('start');
  const [participants, setParticipants] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addParticipants = () => {
    const newParticipant = inputValue;

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
    setMode('roulette');
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

  return (
    <div>
      {mode === 'start' ? (
        <div className='start'>
          <h1>Welcome to the best roulette</h1>
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
        </div>
      ) : (
        <div className='roulette-container'>
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
        </div>
      )}
    </div>
  );
};

export default App;