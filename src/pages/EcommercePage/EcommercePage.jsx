import React from "react";
import Layout from "../../components/Layout";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import SectionsList from "../../components/SectionsList";
import IntegrationsGrid from "../../components/IntegrationsGrid";
import BenefitsSection from "../../components/BenefitsSection";
import ProcessSteps from "../../components/ProcessSteps";
import CTASection from "../../components/CTASection";
import "./EcommercePage.css";

const EcommercePage = () => {
  // Data para las características principales
  const mainFeatures = [
    { 
      icon: '📦', 
      title: 'Catálogo Ilimitado', 
      desc: 'Añade tantos productos como necesites con categorías y filtros' 
    },
    { 
      icon: '💳', 
      title: 'Pagos Seguros', 
      desc: 'MercadoPago, PayPal, tarjetas de crédito y transferencias' 
    },
    { 
      icon: '📱', 
      title: 'Optimizado Móvil', 
      desc: 'Experiencia de compra perfecta en todos los dispositivos' 
    },
    { 
      icon: '📊', 
      title: 'Panel de Administración', 
      desc: 'Gestiona pedidos, inventario, clientes y reportes' 
    },
    { 
      icon: '🚚', 
      title: 'Gestión de Envíos', 
      desc: 'Cálculo automático de costos y seguimiento de pedidos' 
    },
    { 
      icon: '🎯', 
      title: 'Marketing Integrado', 
      desc: 'Cupones, ofertas, email marketing y remarketing' 
    },
  ];

  // Data para casos de uso
  const useCases = [
    {
      icon: "👕",
      title: "Ropa y Moda",
      desc: "Tiendas de indumentaria y accesorios",
    },
    {
      icon: "🏠",
      title: "Hogar y Deco",
      desc: "Muebles, decoración y artículos para el hogar",
    },
    {
      icon: "💄",
      title: "Belleza y Salud",
      desc: "Cosméticos, cuidado personal y suplementos",
    },
    {
      icon: "📱",
      title: "Tecnología",
      desc: "Electrónicos, gadgets y accesorios tech",
    },
    {
      icon: "🎨",
      title: "Arte y Crafts",
      desc: "Productos artesanales y creativos",
    },
    {
      icon: "🍯",
      title: "Alimentos",
      desc: "Productos gourmet, orgánicos y especiales",
    },
  ];

  // Data para las páginas/secciones incluidas
  const ecommerceSections = [
    { name: "Página de Inicio", description: "Productos destacados y ofertas principales" },
    { name: "Catálogo de Productos", description: "Listado completo con filtros y búsqueda" },
    { name: "Página de Producto", description: "Detalles, imágenes, variantes y reseñas" },
    { name: "Carrito de Compras", description: "Resumen de productos y cálculo de totales" },
    { name: "Checkout", description: "Proceso de pago seguro y datos de envío" },
    { name: "Mi Cuenta", description: "Perfil, historial de pedidos y favoritos" },
    { name: "Seguimiento de Pedidos", description: "Estado de envío y tracking" },
    { name: "Políticas", description: "Términos, devoluciones y privacidad" },
    { name: "Soporte", description: "FAQ, contacto y chat en vivo" },
  ];

  // Data para integraciones
  const integrations = [
    { icon: '💬', title: 'WhatsApp Business', desc: 'Consultas y soporte directo' },
    { icon: '📧', title: 'Email Marketing', desc: 'Mailchimp, Klaviyo' },
    { icon: '📱', title: 'Redes Sociales', desc: 'Instagram, Facebook Shop' },
    { icon: '📊', title: 'Google Analytics', desc: 'Seguimiento y conversiones' },
    { icon: '🔍', title: 'Google Shopping', desc: 'Anuncios de productos' },
    { icon: '⭐', title: 'Reseñas', desc: 'Google Reviews, Trustpilot' },
    { icon: '📦', title: 'Logística', desc: 'Correo Argentino, OCA' },
    { icon: '💰', title: 'Contabilidad', desc: 'Integración con sistemas' },
  ];

  // Data para beneficios específicos de e-commerce
  const ecommerceBenefits = [
    "Carrito de compras intuitivo y optimizado para conversiones",
    "Sistema de inventario en tiempo real con alertas de stock",
    "Múltiples métodos de pago para maximizar ventas",
    "Cálculo automático de impuestos y costos de envío",
    "Sistema de cupones y descuentos programables",
    "Gestión de variantes de productos (tallas, colores, etc.)",
    "Reportes de ventas y análisis de comportamiento",
    "Optimización SEO para productos y categorías",
  ];

  // Data para el proceso de trabajo
  const workProcess = [
    'Análisis del negocio y productos a vender',
    'Diseño de la experiencia de compra (UX/UI)',
    'Desarrollo de la tienda y funcionalidades',
    'Configuración de pagos y envíos',
    'Pruebas de compra y optimización',
    'Lanzamiento y capacitación en gestión'
  ];

  return (
    <Layout>
      <ServiceHero 
        title="Tiendas Online E-commerce"
        description="Desarrollamos tiendas online completas que te permiten vender tus productos de manera segura y profesional. Con pasarelas de pago integradas, gestión de inventario y diseño optimizado para conversiones, transformamos tu negocio en una máquina de ventas 24/7."
        badge="🛍️ Vende en Línea"
        imageUrl="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=500&q=80"
      />
      
      <div className="service-page">
        <div className="container">
        <div className="section">
          <h2>¿Por qué elegir una Tienda Online E-commerce?</h2>
          <p>
            Una tienda online te permite vender 24/7 sin límites geográficos. A diferencia de un sitio web 
            tradicional, incluye funcionalidades específicas para e-commerce: carrito de compras, pasarelas 
            de pago, gestión de inventario y herramientas de marketing que convierten visitantes en compradores.
          </p>
        </div>

        <FeatureGrid 
          title="Características Principales" 
          features={mainFeatures} 
        />

        <FeatureGrid 
          title="Ideal para:" 
          features={useCases} 
          className="use-cases"
        />

        <SectionsList
          title="¿Qué páginas incluye tu Tienda Online?"
          description="Una tienda e-commerce completa incluye las siguientes páginas y funcionalidades:"
          sections={ecommerceSections}
        />

        <IntegrationsGrid
          title="Integraciones Disponibles"
          integrations={integrations}
        />

        <BenefitsSection
          title="Beneficios específicos del E-commerce"
          benefits={ecommerceBenefits}
        />

        <ProcessSteps
          title="Nuestro Proceso de Desarrollo"
          steps={workProcess}
        />

        <CTASection
          title="¿Listo para comenzar a vender en línea?"
          description="Obtén una tienda profesional que convierta visitantes en compradores y haga crecer tu negocio las 24 horas del día."
          buttonText="Solicitar Cotización"
        />
        </div>
      </div>
    </Layout>
  );
};

export default EcommercePage;