import { useState } from 'react'
// usar style para los colores
function App() {
  const [count, setCount] = useState(0)

  const changeColor = (color) => {
    // document.body.style.backgroundColor = color;
  }
  const options = {

  }

  return (
    <>
      <div>
        <label for="cars">Choose a color :</label>
        <select name="colors" id="colors">
          
        </select>
      </div>
    </>
  )
}

export default App
