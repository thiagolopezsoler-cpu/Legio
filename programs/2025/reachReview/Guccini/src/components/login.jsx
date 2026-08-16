import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Obtener usuarios registrados del localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Verificar si el usuario existe y la contraseña es correcta
        const user = registeredUsers.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Inicio de sesión exitoso");
            sessionStorage.setItem('loggedIn', 'true');
            navigate('/'); // Redirige a la página principal
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
        }
    };

    const handleRegister = () => {
        // Obtener usuarios registrados del localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Verificar si el usuario ya está registrado
        const userExists = registeredUsers.some(user => user.username === username);

        if (userExists) {
            alert("El usuario ya está registrado");
            return;
        }

        // Agregar el nuevo usuario al array de usuarios registrados
        registeredUsers.push({ username, email, password });

        // Guardar el array actualizado en localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert("Registro exitoso");
        sessionStorage.setItem('loggedIn', 'true'); // Establecer que el usuario ha iniciado sesión
        navigate('/'); // Redirige a la página principal
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
            {isLogin ? (
                <div>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button id="loginButton" onClick={handleLogin}>Iniciar Sesión</button>
                    <button onClick={toggleForm}>Registrarse</button>
                </div>
            ) : (
                <div>
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
                    <button id="signUpButton" onClick={handleRegister}>Registrarse</button>
                    <button onClick={toggleForm}>Iniciar Sesión</button>
                </div>
            )}
        </div>
    );
}

export default Login;
