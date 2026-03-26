import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Aquí puedes agregar la lógica para registrar al usuario
        if(username === ('') && email === ('') && password === ('')){

        }
        else{
        alert("Registro exitoso");
        sessionStorage.setItem('registered', 'true');
        navigate('/login'); // Redirige a la página de inicio de sesión
        }
    };

    return (
        <div>
            <h2>Registrarse</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrarse</button>
        </div>
    );
}

export default Register;
