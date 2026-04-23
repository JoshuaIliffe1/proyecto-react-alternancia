/**
 * Contacto.jsx — Exercise 1 (route: /contacto)
 * Wrapper page for the ContactForm component (Exercise 2).
 */
import ContactForm from '../components/ContactForm'

function Contacto() {
  return (
    <div className="contacto-page">
      <h2>Contacto</h2>
      <p className="section-desc">
        Rellena el formulario y nos pondremos en contacto contigo.
        Todos los campos son obligatorios.
      </p>
      <ContactForm />
    </div>
  )
}

export default Contacto
