import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Grab theme data directly from context — no props needed!
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <header className="app-header">
        <h1>React Sample App</h1>
        <p className="subtitle">Deployed via Docker CI/CD Pipeline</p>
        {/* Toggle button — uses context directly */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
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
          <h2>Context API Demo</h2>
          <p>Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong></p>
          <p>This component reads theme directly from Context — no props passed!</p>
        </div>
      </main>
    </div>
  )
}

export default App
