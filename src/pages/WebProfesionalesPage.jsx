import React from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

const WebProfesionalesPage = () => (
  <Layout>
    <ServiceHero 
      title="Sitios Web Profesionales"
      description="Creamos sitios web profesionales con múltiples secciones, completamente personalizados para adaptarse a las necesidades específicas de tu negocio. Nuestros diseños son modernos, responsivos y optimizados para motores de búsqueda."
      badge="💼 Presencia Profesional"
      imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80"
    />
    
    <div className="container" style={{ padding: '64px 0' }}>
      <div className="section">
        <h2>Características Principales</h2>
        <div className="features-grid">
          {[
            { icon: '🎨', title: 'Diseño Personalizado', desc: 'Cada sitio es único y hecho a medida' },
            { icon: '🔍', title: 'Optimización SEO', desc: 'Posicionamiento en buscadores' },
            { icon: '📱', title: 'Totalmente Responsivo', desc: 'Perfecto en todos los dispositivos' },
            { icon: '📊', title: 'Análisis Web', desc: 'Integración con Google Analytics' },
            { icon: '💬', title: 'Formulario de Contacto', desc: 'Fácil comunicación con tus clientes' },
            { icon: '📝', title: 'Panel de Administración', desc: 'Gestiona tu contenido fácilmente' },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section">
        <h2>Nuestro Proceso</h2>
        <div className="process-steps">
          {[
            'Análisis de necesidades',
            'Diseño de prototipo',
            'Desarrollo',
            'Pruebas y ajustes',
            'Lanzamiento y capacitación'
          ].map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">{step}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cta-section">
        <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <p>Contáctanos hoy mismo para una consulta sin compromiso.</p>
        <a href="#contacto" className="btn-primary">Solicitar Presupuesto</a>
      </div>
    </div>
    
    <style jsx>{`
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }
      
      .feature-card {
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      
      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .process-steps {
        margin: 3rem 0;
        position: relative;
      }
      
      .process-step {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        position: relative;
        z-index: 1;
      }
      
      .step-number {
        width: 40px;
        height: 40px;
        background: #0070f3;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 1.5rem;
        flex-shrink: 0;
      }
      
      .step-content {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        flex-grow: 1;
        font-weight: 500;
      }
      
      .cta-section {
        text-align: center;
        padding: 4rem 2rem;
        background: #f8f9fa;
        border-radius: 12px;
        margin-top: 4rem;
      }
      
      .cta-section h2 {
        margin-bottom: 1rem;
        color: #212529;
      }
      
      .cta-section p {
        color: #666;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
      
      .btn-primary {
        display: inline-block;
        background: ##0f172a;
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        background: #0f172a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 112, 243, 0.2);
      }
      
      @media (max-width: 768px) {
        .features-grid {
          grid-template-columns: 1fr;
        }
        
        .process-step {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .step-number {
          margin-bottom: 1rem;
        }
      }
    `}</style>
  </Layout>
);

export default WebProfesionalesPage;
