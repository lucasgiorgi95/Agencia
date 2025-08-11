import React from "react";
import Layout from "../../components/Layout";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import SectionsList from "../../components/SectionsList";
import BenefitsSection from "../../components/BenefitsSection";
import PricingSection from "../../components/PricingSection";
import CTASection from "../../components/CTASection";
import "./MenuDigitalPage.css";

const MenuDigitalPage = () => {
  // Data para las características principales
  const mainFeatures = [
    {
      icon: "📱",
      title: "Código QR",
      desc: "Acceso inmediato desde cualquier smartphone",
    },
    {
      icon: "🎨",
      title: "Diseño atractivo",
      desc: "Menús claros y fáciles de navegar",
    },
    {
      icon: "⚡",
      title: "Carga rápida",
      desc: "Optimizado para todo tipo de conexión",
    },
    {
      icon: "🔄",
      title: "Actualización instantánea",
      desc: "Cambia productos y precios al instante",
    },
    {
      icon: "💰",
      title: "Ahorro real",
      desc: "Elimina costos de impresión y reimpresión",
    },
    {
      icon: "🌍",
      title: "Multiidioma",
      desc: "Disponible en varios idiomas según tu público",
    },
  ];

  // Data para casos de uso
  const useCases = [
    {
      icon: "🍕",
      title: "Restaurantes",
      desc: "Con menús variados y categorías",
    },
    {
      icon: "🍺",
      title: "Bares y pubs",
      desc: "Con carta de bebidas y promociones",
    },
    {
      icon: "☕",
      title: "Cafeterías y pastelerías",
      desc: "Con opciones rápidas y dulces",
    },
    {
      icon: "🥗",
      title: "Comercios de comida saludable",
      desc: "Con detalles nutricionales",
    },
    {
      icon: "🚚",
      title: "Food trucks y locales móviles",
      desc: "Que necesitan actualizarse al instante",
    },
  ];

  // Data para las secciones del menú digital
  const menuSections = [
    { name: "Portada", description: "Con logo y bienvenida" },
    {
      name: "Categorías",
      description: "Organizadas para facilitar la búsqueda",
    },
    {
      name: "Listado de platos",
      description: "Con fotos, precios y descripciones",
    },
    { name: "Sección de promociones", description: "Y descuentos" },
    { name: "Información nutricional", description: "Y alérgenos (opcional)" },
    { name: "Datos de contacto", description: "Y redes sociales" },
    { name: "Horarios", description: "De atención" },
    { name: "Métodos de pago", description: "Aceptados" },
  ];

  // Data para el proceso de trabajo
  const howItWorks = [
    "Completás nuestro formulario simple con tu logo, fotos y lista de productos",
    "Diseñamos y desarrollamos tu Menú digital profesional",
    "Recibís el link y código QR listo para usar y compartir con tus clientes",
  ];

  // Data para beneficios clave
  const keyBenefits = [
    "Reduce costos en impresión y actualizaciones",
    "Actualización instantánea sin complicaciones",
    "Experiencia higiénica y sin contacto para tus clientes",
    "Acceso sencillo desde cualquier smartphone, sin apps",
    "Diseño responsive que se adapta a cualquier pantalla",
    "Integración con redes sociales y plataformas de delivery",
    "Estadísticas para conocer tus productos más populares",
    "Administración sencilla y rápida desde un panel",
  ];

  return (
    <Layout>
      <ServiceHero
        title="Menú Digital para tu restaurante, bar o cafetería"
        description="Ofrece a tus clientes una experiencia moderna y sin contacto con menús digitales accesibles desde cualquier celular. Actualizá tu carta en segundos y mejora tus ventas con un diseño fácil y atractivo."
        badge="🍽️ Menú Digital"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80"
        floatingCards={[
          { icon: "💻", text: "Diseño personalizado" },
          { icon: "🚀", text: "Mejor expericna" },
          { icon: "📱", text: "Adaptado a celulares" },
        ]}
      />

      <div className="service-page">
        <div className="container">
          <div className="section">
            <h2>¿Por qué elegir un Menú Digital?</h2>
            <p>
              Los menús digitales reemplazan la carta física ofreciendo
              comodidad, higiene y rapidez. Actualizá precios y platos en tiempo
              real sin gastar en impresiones y dale a tus clientes una
              experiencia moderna que los invita a volver.
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
            title="¿Qué incluye tu Menú Digital?"
            description="Un menú digital profesional incluye las siguientes secciones:"
            sections={menuSections}
          />

          <PricingSection
            title="Inversión"
            price="Desde $30.000 ARS"
            description="Menús accesibles y fáciles de usar, con código QR para que tus clientes vean tu carta en el celular y pidan rápido por WhatsApp o teléfono."
            disclaimer="El precio base no incluye servicios de actualización o mantenimiento.
*Paquetes desde $12.000 ARS (hasta 5 cambios ocasionales).
*Plan mensual desde $15.000 ARS (cambios ilimitados y soporte)."
          />

          <BenefitsSection title="¿Cómo funciona?" benefits={howItWorks} />

          <BenefitsSection
            title="Beneficios de tener un Menú Digital"
            benefits={keyBenefits}
          />

          <CTASection
            title="¿Listo para modernizar tu negocio?"
            description="Mejora la experiencia de tus clientes y optimiza la gestión de tu menú con nuestra solución digital."
            buttonText="Solicitar Menú Digital"
          />
        </div>
      </div>
    </Layout>
  );
};

export default MenuDigitalPage;
