/**
 * Inicio.jsx — Exercise 1 (route: /)
 * Welcome screen with a project description and feature overview cards.
 */
function Inicio() {
  return (
    <div className="inicio-page">
      <div className="inicio-hero">
        <h1>Bienvenido a Mi App React</h1>
        <p>
          Una aplicación web moderna construida con React y Vite. Explora las
          secciones de Servicios y Contacto usando la barra de navegación.
          El contenido cambia dinámicamente sin recargar la página.
        </p>
      </div>

      <div className="inicio-cards">
        <div className="inicio-card">
          <div className="inicio-card-icon">🖼️</div>
          <h3>Galería Interactiva</h3>
          <p>
            Navega por una colección de imágenes con selección dinámica y
            miniaturas interactivas.
          </p>
        </div>

        <div className="inicio-card">
          <div className="inicio-card-icon">📝</div>
          <h3>Blog Dinámico</h3>
          <p>
            Crea, edita, elimina y destaca publicaciones en tiempo real sin
            recargar la página.
          </p>
        </div>

        <div className="inicio-card">
          <div className="inicio-card-icon">📬</div>
          <h3>Formulario de Contacto</h3>
          <p>
            Formulario con validación en tiempo real: campos obligatorios,
            formato de email y longitud mínima de mensaje.
          </p>
        </div>

        <div className="inicio-card">
          <div className="inicio-card-icon">🌙</div>
          <h3>Modo Oscuro / Claro</h3>
          <p>
            Cambia entre tema oscuro y claro usando el botón en la barra de
            navegación. Los estilos se aplican con variables CSS.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inicio
