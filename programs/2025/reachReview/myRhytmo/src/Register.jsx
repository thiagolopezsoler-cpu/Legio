import { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allTheUsers, setAllTheUsers] = useState([]);
  const navigate = useNavigate()

  // const saveRegister = () => {
  //   const user = {
  //     email: email,
  //     password: password
  //   }
  //   setAllTheUsers(prevUsers => [...prevUsers, user]);
  //   // console.log(allTheUsers)
  //   navigate('/home') // <- redirige

  // }
  const saveRegister = () => {
    if(email !== '' && password !== ''){

      const user = { email, password }
      const prevUsers = JSON.parse(localStorage.getItem('usuarios')) || []
      const updatedUsers = [...prevUsers, user]
      localStorage.setItem('usuarios', JSON.stringify(updatedUsers))
      navigate('/home')
    }
    else{
      alert('Please fill in all fields')
    }
}


  const goLogin = () => {
    navigate('/login');
  }


  return (
    <>
      <div className='start'>
        <h1>MyRhitmo</h1>
        <input type="email" placeholder='user' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={saveRegister}>register</button>
        <div onClick={goLogin}>I've acount</div>
      </div>
    </>
  )
}

export default App
