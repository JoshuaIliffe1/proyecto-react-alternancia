/** // Ejercicio 2 - Formulario con validaciones
 * ContactForm.jsx — Exercise 2
 * Controlled form with real-time validation for Name, Email, and Message.
 * - onChange: keeps state in sync with input values
 * - onBlur:   marks a field as "touched" so errors appear only after the user leaves it
 * - onSubmit: final validation gate before "sending"
 * Visual indicators (green/red borders + helper text) show field validity.
 */
import { useState } from 'react'

/** Minimum message length required */
const MIN_MSG_LENGTH = 20

/** Validates a single field and returns an error string, or '' if valid */
function validate(name, value) {
  switch (name) {
    case 'nombre':
      return value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres.' : ''
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !emailRegex.test(value) ? 'Introduce un email válido.' : ''
    }
    case 'mensaje':
      return value.trim().length < MIN_MSG_LENGTH
        ? `El mensaje debe tener al menos ${MIN_MSG_LENGTH} caracteres (faltan ${MIN_MSG_LENGTH - value.trim().length}).`
        : ''
    default:
      return ''
  }
}

function ContactForm() {
  const [values, setValues] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({ nombre: '', email: '', mensaje: '' })
  // touched tracks which fields the user has already interacted with
  const [touched, setTouched] = useState({ nombre: false, email: false, mensaje: false })
  const [submitted, setSubmitted] = useState(false)

  /** Update value and immediately revalidate so errors clear as the user types */
  function handleChange(e) {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
    }
  }

  /** Mark field as touched and show its error when focus leaves */
  function handleBlur(e) {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
  }

  /** Validate all fields; prevent submission if any error exists */
  function handleSubmit(e) {
    e.preventDefault()
    // Mark all fields as touched to reveal any remaining errors
    setTouched({ nombre: true, email: true, mensaje: true })
    const newErrors = {
      nombre:  validate('nombre',  values.nombre),
      email:   validate('email',   values.email),
      mensaje: validate('mensaje', values.mensaje),
    }
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some(err => err !== '')
    if (!hasErrors) setSubmitted(true)
  }

  /** Determine the CSS class for a field's input element */
  function fieldClass(name) {
    if (!touched[name]) return 'form-control'
    return `form-control ${errors[name] ? 'invalid' : 'valid'}`
  }

  if (submitted) {
    return (
      <div className="form-success-msg">
        ✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Nombre */}
      <div className="form-group">
        <label htmlFor="nombre">Nombre <span aria-hidden="true">*</span></label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          className={fieldClass('nombre')}
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu nombre completo"
          autoComplete="name"
        />
        {touched.nombre && errors.nombre && (
          <span className="field-error" role="alert">{errors.nombre}</span>
        )}
        {touched.nombre && !errors.nombre && (
          <span className="field-valid">✓ Nombre válido</span>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass('email')}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="correo@ejemplo.com"
          autoComplete="email"
        />
        {touched.email && errors.email && (
          <span className="field-error" role="alert">{errors.email}</span>
        )}
        {touched.email && !errors.email && (
          <span className="field-valid">✓ Email válido</span>
        )}
      </div>

      {/* Mensaje */}
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje <span aria-hidden="true">*</span></label>
        <textarea
          id="mensaje"
          name="mensaje"
          className={`${fieldClass('mensaje')} form-control-textarea`}
          value={values.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={`Escribe tu mensaje (mínimo ${MIN_MSG_LENGTH} caracteres)`}
        />
        {touched.mensaje && errors.mensaje && (
          <span className="field-error" role="alert">{errors.mensaje}</span>
        )}
        {touched.mensaje && !errors.mensaje && (
          <span className="field-valid">✓ Mensaje válido</span>
        )}
      </div>

      <button
        type="submit"
        className="form-submit-btn"
      >
        Enviar mensaje
      </button>
    </form>
  )
}

export default ContactForm
