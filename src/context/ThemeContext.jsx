import { createContext, useContext, useState } from 'react'

// Step 1: Create the "table" (context)
const ThemeContext = createContext()

// Step 2: Create the Provider — this wraps your app and puts data on the table
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Step 3: Custom hook — makes it easy to grab data from the table
export function useTheme() {
  return useContext(ThemeContext)
}
