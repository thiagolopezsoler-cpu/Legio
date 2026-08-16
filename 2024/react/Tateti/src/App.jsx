import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null]);
  const [count, setCount] = useState(0);
  const [turno, setTurno] = useState('Jugador 1');

  const incrementar = () => {
    setCount(count + 1);
    console.log("Incrementar:", count + 1); // Para verificar en consola
  
  };

  const cambiarTurno = () => {
    if(turno === 'jugador 2'){
      arreglo[1] = 'x' 
    }
    setTurno(turno === 'Jugador 1' ? 'Jugador 2' : 'Jugador 1'); // Alterna el turno
    console.log("Turno cambiado a:", turno);

  };




  }
  const manejarclick = () => {
    incrementar();
    cambiarTurno();
  };

  return (
    <>
<div className='titulo'>
<h1>Tateti</h1>
<h1>Bienvenido</h1>
</div>

<div className='cuadrados'>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[0]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[1]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[2]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[3]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[4]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[5]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[6]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[7]}</button></div>
<div><button className='cuadrado' onClick={manejarclick}>{arreglo[8]}</button></div>



<p>Cuenta actual: {count}</p>
</div>

<div className='jugador'>
  <p>Turno del jugador: {turno}</p>
</div>
    </>
  )


export default App


