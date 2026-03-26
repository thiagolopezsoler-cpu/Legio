import { useNavigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function Login() {
    const [emailGo, setEmailGo] = useState('');
    const [passwordGo, setPasswordGo] = useState('');

    const navigate = useNavigate()

    // const openHome = () => {
    //     console.log('open home')
    //     navigate('/home')
    // }

    const goRegister = () => {
        navigate('/')
    }
// revisar estooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    const handleLogin = () => {
        if (emailGo == '' || passwordGo == '') {
            alert('Please fill in all fields')
        } else {
            const users = JSON.parse(localStorage.getItem('usuarios')) || []
            const found = users.find(u => u.email === emailGo && u.password === passwordGo)
            console.log(found, users)
            if (found) {
                navigate('/home')
            } else {
                alert('Usuario o contraseña incorrectos')
            }
        }
    }

    return (
        <>
            <div className='start'>
                <h1>MyRhimo</h1>
                <input
                    type="text"
                    placeholder="email"
                    value={emailGo}
                    onChange={(e) => setEmailGo(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="user"
                    value={passwordGo}
                    onChange={(e) => setPasswordGo(e.target.value)}
                />
                <button onClick={handleLogin} >login</button>
                <div onClick={goRegister}>I don't have acount</div>
            </div>
        </>
    )
}
export default Login
