import { useState } from 'react';
import './App.css';

function App() {
  const [sector, setSector] = useState("sectorHome");

  return (
    <>
      <header className='header'>
        <div onClick={() => setSector("sectorHome")}>Home</div>
        <div onClick={() => setSector("sectorPython")}>Python</div>
        <div onClick={() => setSector("sectorJavaScript")}>JavaScript</div>
      </header>

      {/* Contenido según el sector */}

      {sector === "sectorHome" && (
        <div style={{ fontSize: '60px' }}>To Learn Code</div>
      )}
      {sector === "sectorPython" && (
        <div>
          <div style={{ fontSize: '60px' }}>To Learn Python</div>
          <div style={{ fontSize: '18px', lineHeight: '1.6', whiteSpace: 'pre-line', textAlign: 'left'}}>
            
            {"Python es un lenguaje de programación de alto nivel, interpretado y multiparadigma, famoso por su sintaxis clara y legible, ideal para principiantes y profesionales.\n"}
            {"Se usa en ciencia de datos, desarrollo web, automatización e inteligencia artificial.\n\n"}
            {"Características principales:\n"}
            {"1. Sintaxis simple y limpia\n"}
            {"   Python usa indentación para definir bloques de código:\n"}
            {"   def saludo(nombre):\n"}
            {"       print(f\"Hola, {nombre}!\")\n"}
            {"   saludo(\"Thiago\")\n\n"}
            {"2. Tipado dinámico\n"}
            {"   x = 10  # int\n"}
            {"   x = \"Hola\" # str\n\n"}
            {"3. Gran cantidad de librerías: numpy, pandas, matplotlib, seaborn, requests, tensorflow, pytorch.\n"}
            {"4. Paradigmas soportados: Procedural, Orientado a objetos, Funcional.\n\n"}
            {"Ejemplo elegante:\n"}
            {"numeros = [1,2,3,4,5]\n"}
            {"suma_cuadrados = sum([x**2 for x in numeros])\n"}
            {"print(f\"Suma de cuadrados: {suma_cuadrados}\")\n\n"}
            {"Aplicaciones: Desarrollo web (Django, Flask), Ciencia de datos, Automatización, Juegos.\n"}
            {"Tip “fachero”: usa list comprehensions, f-strings y modularidad para código limpio."}
          </div>
        </div>
      )}

      {sector === "sectorJavaScript" && (
        <div style={{ fontSize: '60px' }}>To Learn JavaScript</div>
      )}
    </>
  );
}

export default App;