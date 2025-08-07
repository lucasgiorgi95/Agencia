import React from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import FeatureGrid from "../components/FeatureGrid";
import SectionsList from "../components/SectionsList";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";

const LandingPage = () => {
  // Data para las características principales
  const mainFeatures = [
    {
      icon: "🎯",
      title: "Enfoque en Conversión",
      desc: "Diseñadas para generar acciones específicas",
    },
    {
      icon: "⚡",
      title: "Carga Ultrarrápida",
      desc: "Optimizadas para máximo rendimiento",
    },
    {
      icon: "📱",
      title: "Totalmente Responsiva",
      desc: "Perfecta en todos los dispositivos",
    },
    {
      icon: "✍️",
      title: "Copywriting Persuasivo",
      desc: "Textos que conectan y convierten",
    },
    {
      icon: "📊",
      title: "Métricas Integradas",
      desc: "Seguimiento de conversiones",
    },
    {
      icon: "🚀",
      title: "Lanzamiento Rápido",
      desc: "En línea en tiempo récord",
    },
  ];

  // Data para casos de uso
  const useCases = [
    {
      icon: "🛍️",
      title: "Promociones",
      desc: "Ofertas especiales y descuentos",
    },
    {
      icon: "📚",
      title: "Cursos Online",
      desc: "Captación de estudiantes",
    },
    {
      icon: "🏢",
      title: "Servicios",
      desc: "Generación de leads calificados",
    },
    {
      icon: "🎉",
      title: "Eventos",
      desc: "Inscripciones y reservas",
    },
  ];

  // Data para las secciones de una landing page
  const landingSections = [
    { name: "Header", description: "Logo y navegación principal" },
    {
      name: "Hero Section",
      description: "Título principal, subtítulo y llamada a la acción",
    },
    {
      name: "Propuesta de Valor",
      description: "Beneficios claros de tu producto o servicio",
    },
    {
      name: "Características",
      description: "Funcionalidades y ventajas específicas",
    },
    {
      name: "Testimonios",
      description: "Opiniones reales de clientes satisfechos",
    },
    { name: "FAQ", description: "Preguntas frecuentes para resolver dudas" },
    { name: "Contacto", description: "Formulario y datos de contacto directo" },
    {
      name: "Call to Action",
      description: "Botones estratégicos para generar conversiones",
    },
    {
      name: "Footer",
      description: "Información adicional y enlaces importantes",
    },
  ];

  // Data para elementos clave
  const keyElements = [
    "Título claro y atractivo que capture la atención",
    "Propuesta de valor bien definida",
    "Llamada a la acción prominente y persuasiva",
    "Beneficios específicos fáciles de entender",
    "Diseño limpio sin distracciones",
    "Prueba social que genere confianza",
    "Urgencia y escasez para motivar la acción",
    "Optimización para dispositivos móviles",
  ];

  return (
    <Layout>
      <ServiceHero
        title="Landing Pages"
        description="Creamos páginas simples y atractivas pensadas para que las personas que la visitan te escriban, compren o pidan más información. Son ideales para promocionar un producto o servicio puntual, y funcionan perfecto en celulares, tablets o computadoras."
        badge="🚀 Landing Pages"
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
      />

      <div className="container" style={{ padding: "64px 0" }}>
        <style jsx>{`
          @media (max-width: 768px) {
            .container {
              padding: 32px 0 !important;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 24px 0 !important;
            }
          }
        `}</style>
        <div className="section">
          <h2>¿Por qué elegir nuestras Landing Pages?</h2>
          <p>
            Porque están pensadas para cumplir un objetivo claro: que tu negocio
            reciba más consultas, más ventas o más contactos. Nos enfocamos en
            el diseño, los textos y la experiencia para que cada visitante haga
            lo que vos querés que haga.
          </p>
        </div>

        <style jsx>{`
          .section {
            margin-bottom: 3rem;
          }

          .section h2 {
            margin-bottom: 1rem;
          }

          .section p {
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .section {
              margin-bottom: 2rem;
            }

            .section h2 {
              font-size: 1.5rem;
              line-height: 1.3;
            }

            .section p {
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }

          @media (max-width: 480px) {
            .section h2 {
              font-size: 1.3rem;
            }

            .section p {
              font-size: 0.9rem;
            }
          }
        `}</style>

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
          title="¿Qué secciones lleva una Landing Page?"
          description="Una landing page incluye las siguientes secciones:"
          sections={landingSections}
        />

        <BenefitsSection
          title="Elementos clave de una landing efectiva"
          benefits={keyElements}
        />

        <CTASection
          title="¿Listo para crear tu landing page perfecta?"
          description="Convierte más visitantes en clientes con una página diseñada para resultados."
          buttonText="Solicitar Landing Page"
        />
      </div>
    </Layout>
  );
};

export default LandingPage;
