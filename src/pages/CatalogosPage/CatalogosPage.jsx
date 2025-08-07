import React from "react";
import Layout from "../../components/Layout";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import BenefitsSection from "../../components/BenefitsSection";
import CTASection from "../../components/CTASection";
import "./CatalogosPage.css";

const CatalogosPage = () => {
  // Data para las características principales
  const mainFeatures = [
    { icon: '📱', title: 'Diseño Mobile-First', desc: 'Optimizado para dispositivos móviles' },
    { icon: '⚡', title: 'Carga Rápida', desc: 'Experiencia de usuario fluida' },
    { icon: '🔄', title: 'Actualizaciones en Tiempo Real', desc: 'Cambios instantáneos' },
    { icon: '🔍', title: 'Búsqueda Inteligente', desc: 'Encuentra productos fácilmente' },
    { icon: '💬', title: 'WhatsApp Integrado', desc: 'Pedidos directos desde el catálogo' },
    { icon: '⚙️', title: 'Panel de Control', desc: 'Gestiona tu contenido fácilmente' },
  ];

  // Data para casos de uso
  const useCases = [
    { icon: '🍽️', title: 'Restaurantes', desc: 'Menús digitales interactivos' },
    { icon: '🍺', title: 'Bares', desc: 'Cartas de bebidas actualizables' },
    { icon: '🛍️', title: 'Tiendas', desc: 'Catálogo de productos' },
    { icon: '🔧', title: 'Servicios', desc: 'Portafolio de trabajos' },
  ];

  // Data para beneficios clave
  const keyBenefits = [
    'Elimina costos de impresión',
    'Actualizaciones instantáneas',
    'Experiencia interactiva',
    'Fácil de compartir',
    'Sin necesidad de app',
    'Analíticas de uso'
  ];

  return (
    <Layout>
      <ServiceHero 
        title="Catálogos Digitales Interactivos"
        description="Transforma tu menú o catálogo físico en una experiencia digital interactiva. Ideal para restaurantes, barcos, tiendas y cualquier negocio que necesite mostrar sus productos de manera atractiva en dispositivos móviles."
        badge="📱 Moderniza tu Menú"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80"
      />
      
      <div className="service-page">
        <div className="container">
        <FeatureGrid 
          title="Características Principales" 
          features={mainFeatures} 
        />

        <FeatureGrid 
          title="Ideal para:" 
          features={useCases} 
          className="use-cases"
        />

        <BenefitsSection
          title="Beneficios Clave"
          benefits={keyBenefits}
        />

        <CTASection
          title="¿Listo para modernizar tu menú o catálogo?"
          description="Convierte tu catálogo en una experiencia digital atractiva para tus clientes."
          buttonText="Solicitar Demostración"
        />
        </div>
      </div>
    </Layout>
  );
};

export default CatalogosPage;