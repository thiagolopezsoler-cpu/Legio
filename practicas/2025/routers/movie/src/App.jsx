import { Outlet, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='movies/all'>movies</Link>
      <Outlet />
    </div>
  )
}

export default App
