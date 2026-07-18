import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const discount = [1.1, 1.2, 1.3, 1.4, 1.5];

  const calculate = () => {
    setValue((select.value * input.value))
  }

  return (
    <>
      <div className='all'>
        <h1>Welcome to calculate yours props</h1>
        <h2>input the prize</h2>
        <div>
          <input id="input" type="number" style={{ width: '200px', height: '40px', fontSide: '50px', borderRadius: '40px' }} />
          {/* <select name="" id="select" style={{ width: '50px', height: '40px', color: 'black', background: 'white', borderRadius: '15px' }}>
            <option value="1.1">10%</option>
            <option value="1.2">20%</option>
            <option value="1.3">30%</option>
            <option value="1.4">40%</option>
            <option value="1.5">50%</option>
          </select> */}
          <p>{discount[1]}</p>
        </div>
        <button style={{ height: '70px', width: '200px', borderRadius: '25px' }} onClick={calculate}>Calculate</button>
        <p>{"total a pagar " + value.toFixed(2)}</p>
      </div>
    </>
  )
}

export default App
