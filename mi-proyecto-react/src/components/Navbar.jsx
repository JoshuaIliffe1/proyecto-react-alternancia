/**
 * Navbar.jsx — Exercise 1
 * Sticky navigation bar with React Router NavLink components.
 * NavLink automatically adds the "active" CSS class to the link matching
 * the current route, making the active section visually clear.
 * Also contains the dark/light theme toggle button (Exercise 5).
 */
import { NavLink } from 'react-router-dom'

/**
 * @param {boolean} darkMode — current theme state
 * @param {Function} onToggleTheme — callback to flip the theme
 */
function Navbar({ darkMode, onToggleTheme }) {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">
        <span className="navbar-brand">⚛ Mi App React</span>

        <ul className="navbar-links">
          {/* NavLink sets className="active" automatically for the matching route */}
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>

        {/* Exercise 5: toggle between light and dark mode */}
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
