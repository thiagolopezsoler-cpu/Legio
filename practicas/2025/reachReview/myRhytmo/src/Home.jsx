import React from "react"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    const back = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="headerHome">
                <div className="acount"></div>
                <h2>Bienvenido a la pagina principal</h2>
                <button onClick={back}>back</button>
            </div>
            <div>
                <div>categories</div>
                <div className="products">
                    <div className="product">
                        <img src="auris.jpg" alt="Producto 1" />
                        <div className="price">Remera Roja - $1500</div>
                    </div>
                    <div className="product">
                        <img src="bolso.jpg" alt="Producto 2" />
                        <div className="price">Campera Negra - $7500</div>
                    </div>
                    <div className="product">
                        <img src="reloj.jpg" alt="Producto 3" />
                        <div className="price">Zapatillas Urbanas - $12500</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
