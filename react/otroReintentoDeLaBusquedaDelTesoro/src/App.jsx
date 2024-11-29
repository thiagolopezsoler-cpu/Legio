import React, { useState } from 'react'


export const App = () => {
  const [jugador, setJugador] = useState('');
  const [mode, setMode] = useState('preparation')

  function changeName() {
    console.log(jugador);
    setMode('game');
  }
  return (
    <div>
      {mode === 'preparation' ? (
        <div>
          <h1>Welcome to......</h1>
          <input
            type="text"
            placeholder='how is your name?'
            onChange={(e) => setJugador(e.target.value)}
          />
          <button onClick={changeName}>go</button>
        </div>) : (
        <div>
          <h1>Hello, {jugador}! The game starts now.</h1>
        </div>
      )}
    </div>
  );
};

export default App