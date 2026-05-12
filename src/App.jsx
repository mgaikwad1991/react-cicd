import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚛️ React Sample App</h1>
        <p className="subtitle">Deployed via Docker CI/CD Pipeline</p>
      </header>

      <main className="app-main">
        <div className="card">
          <h2>Counter</h2>
          <p className="count">{count}</p>
          <div className="button-group">
            <button onClick={() => setCount(count - 1)}>−</button>
            <button onClick={() => setCount(0)} className="reset">Reset</button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        <div className="card">
          <h2>Getting Started</h2>
          <p>Edit <code>src/App.jsx</code> and save to see your changes instantly.</p>
          <ul>
            <li>⚡ Vite for fast dev server &amp; builds</li>
            <li>⚛️ React 18 with hooks</li>
            <li>🎨 Plain CSS styling</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
