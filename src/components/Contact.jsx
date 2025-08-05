function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <span>Contacto</span>
          </div>
          <h2>¿Hablamos?</h2>
          <p>Contame qué necesitás y te respondo a la brevedad.</p>
        </div>
        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="tu@email.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="project">Tipo de proyecto</label>
                <select id="project" required>
                  <option value="">Selecciona un tipo</option>
                  <option value="web-simple">Web Simple</option>
                  <option value="web-profesional">Web Profesional</option>
                  <option value="catalogo">Catálogo Online</option>
                  <option value="ecommerce">Ecommerce</option>
                  <option value="catalogo-digital">Catálogo Digital</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  placeholder="Contame sobre tu proyecto..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Enviar mensaje
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <a href="mailto:hola@webdev.com">hola@webdev.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.44 4.04 6 5.92C6.12 6.32 6 6.76 5.72 7.04L4.12 8.64C5.32 11.24 7.76 13.68 10.36 14.88L11.96 13.28C12.24 13 12.68 12.88 13.08 13C14.96 13.56 16.92 13.84 18.92 13.84C19.52 13.84 20 14.32 20 14.92V17.92C20 18.52 19.52 19 18.92 19Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/1234567890">+54 9 11 1234-5678</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 14C16.42 14 20 17.58 20 22H4C4 17.58 7.58 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <a href="#">/webdev-profesional</a>
                </div>
              </div>
            </div>
            <div className="contact-availability">
              <div className="availability-badge">
                <span className="status-dot"></span>
                <span>Disponible para nuevos proyectos</span>
              </div>
              <p>Tiempo de respuesta promedio: 2-4 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;