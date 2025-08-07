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
            <h2 style={{ fontSize: '3rem' }}>{title}</h2>
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
