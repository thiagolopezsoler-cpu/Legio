import { useState, useRef, useEffect } from 'react'
import './App.css'
import './index.css'

function App() {
  const [mode, setMode] = useState("register")
  const contenedorRef = useRef(null)

  const goRegister = () => setMode("register")
  const goStudents = () => setMode("students")

  useEffect(() => {
    const contenedor = contenedorRef.current
    if (!contenedor) return

    let isDown = false
    let startX
    let scrollLeft

    const mouseDown = (e) => {
      isDown = true
      contenedor.classList.add("active")
      startX = e.pageX - contenedor.offsetLeft
      scrollLeft = contenedor.scrollLeft
    }

    const mouseLeave = () => {
      isDown = false
      contenedor.classList.remove("active")
    }

    const mouseUp = () => {
      isDown = false
      contenedor.classList.remove("active")
    }

    const mouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - contenedor.offsetLeft
      const walk = (x - startX) * 2
      contenedor.scrollLeft = scrollLeft - walk
    }

    contenedor.addEventListener("mousedown", mouseDown)
    contenedor.addEventListener("mouseleave", mouseLeave)
    contenedor.addEventListener("mouseup", mouseUp)
    contenedor.addEventListener("mousemove", mouseMove)

    return () => {
      contenedor.removeEventListener("mousedown", mouseDown)
      contenedor.removeEventListener("mouseleave", mouseLeave)
      contenedor.removeEventListener("mouseup", mouseUp)
      contenedor.removeEventListener("mousemove", mouseMove)
    }
  }, [mode]) // se ejecuta cada vez que cambia mode

  return (
    <>
      <header>
        <img src="https://www.itr.edu.ar/images/LogoITR-60.jpg" alt="ITR" />
        <div className="botones">
          <p onClick={goRegister} className={mode === 'register' ? "activo" : "inactivo"}>Registrar</p>
          <p onClick={goStudents} className={mode === 'students' ? "activo" : "inactivo"}>Alumnos</p>
        </div>
      </header>

      <main>
        {mode === "register" ? (
          <div>
            <h1>Alumnos</h1>
            <div className='fila'>
            <input type="text" placeholder='nombre' />
            <select name="tipo" id="">
              <option value="0.25">0.25</option>
              <option value="0.5">0.5</option>
              <option value="0.75">0.75</option>
              <option value="1">1</option>
            </select>
            </div>
            <button>agregar</button>
            <button>enviar</button>
          </div>
        ) : (
          <div ref={contenedorRef} className="meses-container">
            {[
              "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
              "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ].map((mes, i) => ( 
              <div key={i} className="mes">
                {mes}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default App
