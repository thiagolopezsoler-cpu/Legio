import React, { useState } from 'react';
import { UbicacionDelTesoro } from './components/UbicacionDelTesoro';

const App = () => {
  const [colours, setColours] = useState(true);
  
  const changeColour = () => {
    setColours(!colours);
  }
  return (
    <div>
      <div onClick={changeColour}>byLegio</div>
      <div className= {colours ? 'red' : 'blue' }>
        <UbicacionDelTesoro />
      </div>
    </div>
  );
};

export default App; // Exportación por defecto+