import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>0
      <div>
        <a>
          <img/>
        </a>
        <a>
          <img/>
        </a>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
