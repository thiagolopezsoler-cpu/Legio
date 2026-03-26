import { useState } from 'react'
import './index.css'

function App() {
const [name, setName] = useState('legio')
const greet  = () => {
  console.log(name)
} 
  return (
    <>
  <p>{dname}</p>
    </>
  )
}

export default App
