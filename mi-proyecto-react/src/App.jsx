/**
 * App.jsx — root component
 * Sets up the router (Exercise 1) and manages the dark/light theme (Exercise 5).
 * The theme is applied via a data-theme attribute on <html> so CSS variables
 * defined in index.css switch globally without a page reload.
 */
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  // dark mode state — default to system preference
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  // Apply/remove the data-theme attribute on <html> whenever darkMode changes
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(d => !d)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Mi Proyecto React · EIG Education
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
