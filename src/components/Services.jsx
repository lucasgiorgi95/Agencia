const services = [
  {
    title: "Web Simples",
    description: "Landing pages claras y efectivas para mostrar quién sos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
    icon: "🌐"
  },
  {
    title: "Web Profesionales", 
    description: "Sitios multi sección con diseño a medida.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
    icon: "💼"
  },
  {
    title: "Ecommerce",
    description: "Vendé tus productos con una tienda funcional y segura.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
    icon: "🛒"
  },
  {
    title: "Catálogos Digitales",
    description: "Ideal para bares, restaurantes y locales físicos.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=300&q=80",
    icon: "📱"
  }
];

import { useNavigate } from "react-router-dom";

// Mapeo de servicios a sus rutas correspondientes
const serviceRoutes = {
  "Web Simples": "/servicio/landing-page",
  "Web Profesionales": "/servicio/web-profesionales",
  "Ecommerce": "/servicio/ecommerce",
  "Catálogos Digitales": "/servicio/catalogos-digitales"
};

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    // Hacer scroll al top después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section  className="services">
      <div id="servicios" className="container">
        <div className="services-header">
          <div className="section-badge">
            <span>Servicios</span>
          </div>
          <h2>Servicios que potencian tu marca</h2>
          <p>Soluciones web personalizadas para cada necesidad de tu negocio</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onClick={() => handleServiceClick(serviceRoutes[service.title])}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;