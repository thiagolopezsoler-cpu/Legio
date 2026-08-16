import { useState } from 'react'


function App() {
  const [number, setNumber] = useState(0)

  const changeValue = (inputValue) => {
    setNumber(inputValue)
  }

  return (
    <>
      <div className='all'>
        <h1 className='text'>Hello</h1>
        <input value = {number} type="number" className='input' onChange={(e) => changeValue(e.target.value)}/>
        <h1>{number * 2}</h1>
      </div>
    </>
  )
}

export default App
