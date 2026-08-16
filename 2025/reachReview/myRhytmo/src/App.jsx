import { Routes, Route } from 'react-router-dom'
import Register from './register'
import Home from './home'
import Login from './login'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App
