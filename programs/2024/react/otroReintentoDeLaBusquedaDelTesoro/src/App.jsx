import React, { useState } from 'react'
//no vendria mal si pongo un boton que haga que si vos lo presionas te ponga un 
//cuadrado automacticamente y que ese cuadrado obviamente sea aleatio
export const App = () => {
  //save of name for player
  const [player, setPlayer] = useState('Player');
  //change mode of game
  const [mode, setMode] = useState('preparation');
  //is the attempts by player
  const [attemptsValue, setAttemptsValue] = useState(0);
  //arrangement with square
  const [positions, setPositions] = useState(Array(25).fill(null));
  //number lucky for place from trasure
  const [locationFromTrasure, setLocationFromTrasure] = useState(7);

  function playGame() {
    //console.log(player);
    setMode('game');
    generationNumber();
  }
  function generationNumber() {
    let locationFromTrasure = Math.floor(Math.random() * 24);
    setLocationFromTrasure(locationFromTrasure);
    //console.log(locationFromTrasure);
  }
  function checkedBox(index) {
    //console.log("the click of the button arrived " + index)
    if (index === locationFromTrasure) {
      alert("You are THE WINNER, congratulations");
      setPositions(Array(25).fill(null));
      generationNumber();
      setAttemptsValue(0);
    } else {
      const newPositions = [...positions];
      newPositions[index] = "x"
      setPositions(newPositions);
    }
    setAttemptsValue(attemptsValue + 1);
  }
  return (
    <div>
      {mode === 'preparation' ? (
        <div className='start'>
          <h1>Welcome to......</h1>
          <input
            className='input'
            type="text"
            placeholder='how is your name?'
            onChange={(e) => setPlayer(e.target.value)}
          />
          <button onClick={playGame} className='btn'>go</button>
        </div>) : (
        <div>
          <h1>Hello, {player}! The game starts right now.</h1>
          <p>yours attempts {attemptsValue}</p>
          <div className='bottons'>
            {positions.map((value, index) => {
              return (
                <div
                  className={positions[index] === null ? 'botton' : 'bottonPressed'}
                  key={index}
                  onClick={() => checkedBox(index)}>
                  {value}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App