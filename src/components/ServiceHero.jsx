import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHero = ({ title, description, badge, imageUrl }) => {
  return (
    <section className="hero service-hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>{badge || '✨ Servicio Profesional'}</span>
            </div>
            <h2 className="hero-title">{title}</h2>
            <p>{description}</p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Solicitar presupuesto
              </a>
              <Link to="/#servicios" className="btn-secondary">
                <span>Ver todos los servicios</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src={imageUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"}
                alt={title}
              />
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <div className="card-icon">💻</div>
                  <span>Diseño Personalizado</span>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🚀</div>
                  <span>Resultados Garantizados</span>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">📱</div>
                  <span>100% Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
<style jsx>{`
  .hero-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #0f172a;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  }

  .hero-text p {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .hero-badge {
    margin-bottom: 1rem;
  }

  .hero-buttons {
    gap: 1rem;
  }

  /* Optimización para tablets */
  @media (max-width: 1024px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-text p {
      font-size: 1.1rem;
    }
  }

  /* Optimización para móviles */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .hero-text p {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .hero-badge {
      text-align: center;
      margin-bottom: 1rem;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      max-width: 280px;
      text-align: center;
      justify-content: center;
    }
  }

  /* Optimización para móviles pequeños */
  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.75rem;
      line-height: 1.3;
    }
    
    .hero-text p {
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .hero-badge span {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }

    .floating-card {
      display: none;
    }

    .hero-image-container {
      width: 100%;
      max-width: 300px;
    }
  }

  /* Optimización para móviles muy pequeños */
  @media (max-width: 360px) {
    .hero-title {
      font-size: 1.5rem;
    }
    
    .hero-text p {
      font-size: 0.9rem;
    }

    .btn-primary,
    .btn-secondary {
      font-size: 0.9rem;
      padding: 0.7rem 1.5rem;
    }
  }
`}</style>