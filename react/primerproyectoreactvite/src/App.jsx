
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/images.png';
import './index.css';

function App() {
const [number, setNumber] = useState(0);

const increment = () => {
  setNumber(prevNumber => prevNumber + 1);
};

const decrement = () => {
  setNumber(prevNumber => prevNumber - 1);
};


  return (
    <>

    <div className= "titulo" >
    <img src={logo} alt="Logo" />
    <h1>ejercicio</h1>
    </div>

    <div className='numero'>
    <h1>{number}</h1>
    </div>

    <div className='conteinerbutton'>
    <button className='button' onClick={increment}>incrementar</button>
    <button className='button' onClick={decrement}>decrementar</button>
    </div>
    
    </>


  )
}


export default App