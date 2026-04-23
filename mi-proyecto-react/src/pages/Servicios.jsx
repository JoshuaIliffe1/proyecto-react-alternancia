/**
 * Servicios.jsx — Exercise 1 (route: /servicios)
 * Container page for the Gallery (Exercise 3) and Blog (Exercise 4) components.
 */
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'

function Servicios() {
  return (
    <div className="servicios-page">
      {/* Gallery section */}
      <section aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">Galería de Imágenes</h2>
        <p className="section-desc">
          Haz clic en una miniatura para ver la imagen en grande.
        </p>
        <Gallery />
      </section>

      <hr className="section-divider" />

      {/* Blog section */}
      <section aria-labelledby="blog-heading">
        <h2 id="blog-heading">Blog</h2>
        <p className="section-desc">
          Crea publicaciones dinámicamente. Puedes editarlas, eliminarlas o destacarlas.
        </p>
        <Blog />
      </section>
    </div>
  )
}

export default Servicios
