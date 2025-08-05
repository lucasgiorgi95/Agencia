function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p>Construyamos juntos la web que tu proyecto necesita.</p>
          </div>
          <div className="cta-actions">
            <a href="#contacto" className="btn-primary">
              CONTACTAME AHORA
            </a>
            <div className="cta-info">
              <div className="cta-feature">
                <span className="feature-icon">⚡</span>
                <span>Respuesta en 24hs</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">💬</span>
                <span>Consulta gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;