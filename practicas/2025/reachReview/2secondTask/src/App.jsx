import { useState } from 'react'


function App() {
  const [text, setText] = useState('Write something')

  const changeValue = (inputValue) => {
    setText(inputValue)
  }

  return (
    <>
      <div className='all'>
        <h1 className='text'>Hello</h1>
        <input className='input' onChange={(e) => changeValue(e.target.value)} />
        <h1>{text}</h1>
      </div>
    </>
  )
}

export default App
