import React from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

const CatalogosPage = () => (
  <Layout>
    <ServiceHero 
      title="Catálogos Digitales Interactivos"
      description="Transforma tu menú o catálogo físico en una experiencia digital interactiva. Ideal para restaurantes, barcos, tiendas y cualquier negocio que necesite mostrar sus productos de manera atractiva en dispositivos móviles."
      badge=" Moderniza tu Menú"
      imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80"
    />
    
    <div className="container" style={{ padding: '64px 0' }}>
      <div className="section">
        <h2>Características Principales</h2>
        <div className="features-grid">
          {[
            { icon: '', title: 'Diseño Mobile-First', desc: 'Optimizado para dispositivos móviles' },
            { icon: '', title: 'Carga Rápida', desc: 'Experiencia de usuario fluida' },
            { icon: '', title: 'Actualizaciones en Tiempo Real', desc: 'Cambios instantáneos' },
            { icon: '', title: 'Búsqueda Inteligente', desc: 'Encuentra productos fácilmente' },
            { icon: '', title: 'WhatsApp Integrado', desc: 'Pedidos directos desde el catálogo' },
            { icon: '', title: 'Panel de Control', desc: 'Gestiona tu contenido fácilmente' },
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
        <h2>Ideal para:</h2>
        <div className="use-cases">
          {[
            { icon: '', title: 'Restaurantes', desc: 'Menús digitales interactivos' },
            { icon: '', title: 'Bares', desc: 'Cartas de bebidas actualizables' },
            { icon: '', title: 'Tiendas', desc: 'Catálogo de productos' },
            { icon: '', title: 'Servicios', desc: 'Portafolio de trabajos' },
          ].map((useCase, index) => (
            <div key={index} className="use-case">
              <div className="use-case-icon">{useCase.icon}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="benefits-section">
        <h2>Beneficios Clave</h2>
        <div className="benefits-grid">
          {[
            'Elimina costos de impresión',
            'Actualizaciones instantáneas',
            'Experiencia interactiva',
            'Fácil de compartir',
            'Sin necesidad de app',
            'Analíticas de uso'
          ].map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="check-icon">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cta-section">
        <h2>¿Listo para modernizar tu menú o catálogo?</h2>
        <p>Convierte tu catálogo en una experiencia digital atractiva para tus clientes.</p>
        <a href="#contacto" className="btn-primary">Solicitar Demostración</a>
      </div>
    </div>
    
    <style jsx>{`
      .features-grid, .use-cases {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }
      
      .feature-card, .use-case {
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
      }
      
      .feature-card:hover, .use-case:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      
      .feature-icon, .use-case-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        display: inline-block;
      }
      
      .use-case {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .benefits-section {
        margin: 4rem 0;
      }
      
      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      
      .benefit-item {
        display: flex;
        align-items: center;
        background: #f8f9fa;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 500;
      }
      
      .check-icon {
        color: #28a745;
        font-weight: bold;
        margin-right: 1rem;
        font-size: 1.2rem;
      }
      
      .cta-section {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        margin-top: 4rem;
      }
      
      .cta-section h2 {
        margin-bottom: 1rem;
        color: #212529;
      }
      
      .cta-section p {
        color: #6c757d;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
      
      .btn-primary {
        display: inline-block;
        background: #0f172a;
        color: white;
        padding: 0.8rem 2.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        font-size: 1.1rem;
      }
      
      .btn-primary:hover {
        background: #0f172a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(111, 66, 193, 0.2);
      }
      
      @media (max-width: 768px) {
        .features-grid, .use-cases, .benefits-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </Layout>
);

export default CatalogosPage;
