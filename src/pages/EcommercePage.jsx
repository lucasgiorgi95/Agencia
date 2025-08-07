import React from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

const EcommercePage = () => (
  <Layout>
    <ServiceHero 
      title="Tiendas Online E-commerce"
      description="Desarrollamos tiendas online completas que te permiten vender tus productos de manera segura y profesional. Con pasarelas de pago integradas, gestión de inventario y diseño optimizado para conversiones, hacemos que vender en línea sea fácil y efectivo."
      badge="🛍️ Vende en Línea"
      imageUrl="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=500&q=80"
    />
    
    <div className="container" style={{ padding: '64px 0' }}>
      <div className="section">
        <h2>Características Principales</h2>
        <div className="features-grid">
          {[
            { icon: '📦', title: 'Catálogo Ilimitado', desc: 'Añade tantos productos como necesites' },
            { icon: '💳', title: 'Pagos Seguros', desc: 'MercadoPago, PayPal, tarjetas y más' },
            { icon: '📱', title: 'Optimizado Móvil', desc: 'Experiencia perfecta en todos los dispositivos' },
            { icon: '📊', title: 'Panel de Control', desc: 'Gestiona pedidos, inventario y clientes' },
            { icon: '🚚', title: 'Gestión de Envíos', desc: 'Cálculo de costos y seguimiento' },
            { icon: '🎯', title: 'Marketing Integrado', desc: 'Cupones, ofertas y email marketing' },
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
        <h2>Beneficios Clave</h2>
        <div className="benefits-container">
          <div className="benefit">
            <div className="benefit-icon">✨</div>
            <div>
              <h3>Diseño Atractivo</h3>
              <p>Tiendas visualmente impactantes que generan confianza y aumentan las ventas.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">⚡</div>
            <div>
              <h3>Rendimiento Óptimo</h3>
              <p>Páginas rápidas que mejoran la experiencia del usuario y el posicionamiento SEO.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🛡️</div>
            <div>
              <h3>Seguridad Garantizada</h3>
              <p>Protección de datos y transacciones seguras con certificado SSL incluido.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>¿Listo para comenzar a vender en línea?</h2>
        <p>Obtén una tienda profesional que impulse tus ventas.</p>
        <a href="#contacto" className="btn-primary">Solicitar Cotización</a>
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
        text-align: center;
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      
      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .benefits-container {
        margin: 3rem 0;
      }
      
      .benefit {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
      }
      
      .benefit-icon {
        font-size: 2rem;
        margin-right: 1.5rem;
        flex-shrink: 0;
      }
      
      .benefit h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      
      .benefit p {
        margin: 0;
        color: #555;
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
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
      }
      
      @media (max-width: 768px) {
        .features-grid {
          grid-template-columns: 1fr;
        }
        
        .benefit {
          flex-direction: column;
          text-align: center;
        }
        
        .benefit-icon {
          margin: 0 auto 1rem;
        }
      }
    `}</style>
  </Layout>
);

export default EcommercePage;
