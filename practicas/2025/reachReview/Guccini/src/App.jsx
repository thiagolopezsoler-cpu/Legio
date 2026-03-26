import React from 'react';
// Importa componentes necesarios de react-router-dom para manejar rutas
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Importa los componentes Login y Home
import Login from './components/login';
import Home from './components/home';

function App() {
  // Chequea si en sessionStorage hay un item 'loggedIn' (esto es como una variable guardada en el navegador)
  const isLoggedIn = sessionStorage.getItem('loggedIn');

  return (
    // Router es el contenedor general que habilita el enrutamiento en la app
    <Router>
      <Routes>
        {/* Ruta para /login, muestra el componente Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta para / (inicio). Si esta logueado muestra Home, si no, redirige a /login */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
