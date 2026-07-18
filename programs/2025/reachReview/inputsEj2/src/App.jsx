import { useState } from 'react'
import './App.css'
import '//cdn.jsdelivr.net/npm/chart.js'

function App() {
  const [distance, setDistance] = useState(0)
  const [velocity, setVelocity] = useState(0)
  
  const handleVelocity = () =>{
    setVelocity(velocityInput.value)  
  }

  const doProblem = (e) =>{
    e.preventDefault();
    calculateDistance();
  }

  const calculateDistance = () =>{
    setDistance((velocity * Math.sin(input.value/360))/ 9,8)
  }
  console.log("it´s working")

  
  return (
    <>
    <div className='all'>
    <form className='inputs' onSubmit={doProblem}>
      <h4>Degrees of inclination</h4>
      <input type="number" min={0} max={90} required id='input'/>
      <h4>Velocity inicial</h4>
      <input id= "velocityInput"type="range" min={0} max={50} onChange={handleVelocity} required/>
      <p>{velocity}</p>
    </form>
    <div>
      
    </div>
    <p>distance: {distance.toFixed(2)} mts</p>
    </div>
    </>
  )
}

export default App
