import React from "react";
import Layout from "../../components/Layout";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import SectionsList from "../../components/SectionsList";
import ProcessSteps from "../../components/ProcessSteps";
import PricingSection from "../../components/PricingSection";
import CTASection from "../../components/CTASection";
import "./WebProfesionalesPage.css";

const WebProfesionalesPage = () => {
  // Data para las características principales
  const mainFeatures = [
    { 
      icon: '🎨', 
      title: 'Diseño Personalizado', 
      desc: 'Cada sitio es único y hecho a medida' 
    },
    { 
      icon: '🔍', 
      title: 'Optimización SEO', 
      desc: 'Posicionamiento en buscadores' 
    },
    { 
      icon: '📱', 
      title: 'Totalmente Responsivo', 
      desc: 'Perfecto en todos los dispositivos' 
    },
    { 
      icon: '📊', 
      title: 'Análisis Web', 
      desc: 'Integración con Google Analytics' 
    },
    { 
      icon: '💬', 
      title: 'Formulario de Contacto', 
      desc: 'Fácil comunicación con tus clientes' 
    },
    { 
      icon: '📝', 
      title: 'Panel de Administración', 
      desc: 'Gestiona tu contenido fácilmente' 
    },
  ];

  // Data para casos de uso
  const useCases = [
    {
      icon: "🏢",
      title: "Empresas",
      desc: "Presencia profesional y credibilidad online",
    },
    {
      icon: "👨‍⚕️",
      title: "Profesionales",
      desc: "Médicos, abogados, consultores",
    },
    {
      icon: "🏪",
      title: "Negocios Locales",
      desc: "Restaurantes, talleres, servicios",
    },
    {
      icon: "🎨",
      title: "Creativos",
      desc: "Portafolios y galerías de trabajo",
    },
    {
      icon: "🏫",
      title: "Instituciones",
      desc: "Colegios, fundaciones, organizaciones",
    },
    {
      icon: "💼",
      title: "Startups",
      desc: "Nuevos emprendimientos y proyectos",
    },
  ];

  // Data para las páginas/secciones incluidas
  const websiteSections = [
    { name: "Página de Inicio", description: "Presentación principal de tu negocio" },
    { name: "Sobre Nosotros", description: "Historia, misión y equipo de trabajo" },
    { name: "Servicios/Productos", description: "Detalle de lo que ofreces" },
    { name: "Portafolio/Galería", description: "Muestra de trabajos realizados" },
    { name: "Blog/Noticias", description: "Contenido actualizable y SEO" },
    { name: "Contacto", description: "Formularios y datos de contacto" },
    { name: "Testimonios", description: "Opiniones de clientes satisfechos" },
    { name: "FAQ", description: "Preguntas frecuentes" },
    { name: "Políticas", description: "Términos, privacidad y legales" },
  ];

  // Data para el proceso de trabajo
  const workProcess = [
    'Análisis de necesidades y objetivos',
    'Diseño de prototipo y estructura',
    'Desarrollo y programación',
    'Pruebas y ajustes finales',
    'Lanzamiento y capacitación'
  ];

  return (
    <Layout>
      <ServiceHero 
        title="Sitios Web Profesionales"
        description="Creamos sitios web profesionales con múltiples páginas y secciones, completamente personalizados para adaptarse a las necesidades específicas de tu negocio. Nuestros diseños son modernos, responsivos y optimizados para motores de búsqueda."
        badge="💼 Presencia Profesional"
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80"
        exampleUrl="https://ejemplo-web-profesional.com"
      />
      
      <div className="service-page">
        <div className="container">
        <div className="section">
          <h2>¿Por qué elegir un Sitio Web Profesional?</h2>
          <p>
            Un sitio web profesional es la base de tu presencia digital. A diferencia de una landing page, 
            incluye múltiples páginas que cuentan la historia completa de tu negocio, generan confianza 
            y te posicionan como líder en tu sector. Es tu oficina virtual disponible 24/7.
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
          title="¿Qué páginas incluye tu Sitio Web Profesional?"
          description="Un sitio web profesional incluye las siguientes páginas y secciones:"
          sections={websiteSections}
        />

        <ProcessSteps
          title="Nuestro Proceso de Trabajo"
          steps={workProcess}
        />

        <PricingSection
          title="Inversión"
          price="Desde $250.000 ARS"
          description="Incluye diseño personalizado, hasta 5 páginas optimizadas para dispositivos móviles, textos persuasivos y configuración básica de SEO y analíticas."
          disclaimer="El precio final puede variar según la cantidad de páginas adicionales, funcionalidades y personalizaciones solicitadas."
        />

        <CTASection
          title="¿Listo para llevar tu negocio al siguiente nivel?"
          description="Contáctanos hoy mismo para una consulta sin compromiso y descubre cómo un sitio web profesional puede transformar tu presencia digital."
          buttonText="Solicitar Presupuesto"
        />
        </div>
      </div>
    </Layout>
  );
};

export default WebProfesionalesPage;