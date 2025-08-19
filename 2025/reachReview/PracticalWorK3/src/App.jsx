import { useState } from 'react'
import './App.css'

function App() {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [resultado, setResultado] = useState('') // <-- nuevo estado

  const handlePlay = () => {
    if (player1 === player2) return setResultado('Draw')
    if (
      (player1 === 'Rock' && player2 === 'Scissors') ||
      (player1 === 'Scissors' && player2 === 'Paper') ||
      (player1 === 'Paper' && player2 === 'Rock')
    ) return setResultado('Player 1')
    return setResultado('Player 2')
  }

  const handleReset = () => {
    setPlayer1('')
    setPlayer2('')
    setResultado('')
  }

  return (
    <>
      <div>
        <select onChange={(e) => setPlayer1(e.target.value)}>
          <option value="">Choose</option>
          <option value="Rock">Rock</option>
          <option value="Paper">Paper</option>
          <option value="Scissors">Scissors</option>
        </select>
        <span> vs </span>
        <select onChange={(e) => setPlayer2(e.target.value)}>
          <option value="">Choose</option>
          <option value="Rock">Rock</option>
          <option value="Paper">Paper</option>
          <option value="Scissors">Scissors</option>
        </select>
        <button onClick={handlePlay}>Play</button>

        {resultado && <p>Resultado: {resultado}</p>} {/* aca lo ves */}
      </div>
    </>
  )
}

export default App
