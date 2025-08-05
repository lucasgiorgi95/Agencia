function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>✨ Desarrollo Web Profesional</span>
            </div>
            <h1>Tu web profesional, hoy</h1>
            <p>
              Desarrollo sitios web modernos, rápidos y funcionales. Desde una
              landing simple hasta tu tienda online completa.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Empezar proyecto
              </a>
              <a href="#portfolio" className="btn-secondary">
                <span>Ver trabajos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
                alt="Desarrollador trabajando"
              />
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <div className="card-icon">💻</div>
                  <span>Desarrollo Web</span>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🚀</div>
                  <span>Rápido & Moderno</span>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">📱</div>
                  <span>Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;