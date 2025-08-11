import React from "react";
import Layout from "../../components/Layout";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import WhatsAppFeature from "../../components/WhatsAppFeature";
import BenefitsSection from "../../components/BenefitsSection";
import CTASection from "../../components/CTASection";
import "./CatalogosPage.css";
import PricingSection from "../../components/PricingSection";

const CatalogosPage = () => {
  // Ventajas principales del servicio
  const mainFeatures = [
    {
      icon: "🚀",
      title: "Sin conocimientos técnicos",
      desc: "Nosotros hacemos todo el trabajo por vos",
    },
    {
      icon: "🎨",
      title: "Diseño profesional",
      desc: "Catálogo atractivo para tu marca",
    },
    {
      icon: "☁️",
      title: "Hosting incluido",
      desc: "Tu catálogo siempre disponible online",
    },
    {
      icon: "📱",
      title: "Código QR personalizado",
      desc: "Listo para imprimir y usar",
    },
    {
      icon: "📲",
      title: "Compatible con móviles",
      desc: "Funciona en todos los dispositivos",
    },
    {
      icon: "🔄",
      title: "Actualizaciones disponibles",
      desc: "Podés modificar tu catálogo después",
    },
  ];

  // Casos de uso ideales
  const useCases = [
    { icon: "🛍️", title: "Tiendas de ropa, calzado y accesorios", desc: "" },
    {
      icon: "🏢",
      title: "Showrooms de productos variados y colecciones",
      desc: "",
    },
    {
      icon: "🖥️",
      title: "Locales de tecnología y electrodomésticos",
      desc: "",
    },
    {
      icon: "🏠",
      title:
        "Negocios con amplias ofertas que quieren mostrar su catálogo sin venta online directa",
      desc: "",
    },
  ];

  // Beneficios de los catálogos digitales
  const catalogBenefits = [
    "Reduce costos en impresión y actualizaciones",
    "Actualización rápida y sencilla sin necesidad de imprimir de nuevo",
    "Presentación profesional que mejora la imagen de tu negocio",
    "Acceso fácil y rápido desde cualquier smartphone, sin apps",
    "Diseño responsive que se adapta a todos los dispositivos",
    "Código QR personalizado para compartir en físico y digital",
    "Facilita la consulta de productos sin necesidad de atención directa",
    "Administración simple y rápida desde un panel intuitivo",
    "Posibilidad de incluir carrito y pedidos directos por WhatsApp"
  ];

  return (
    <Layout>
      <ServiceHero
        title="Catálogos Digitales Profesionales"
        description="Transformamos tu lista de productos en un catálogo digital profesional. Vos solo enviás la información, nosotros hacemos todo el trabajo."
        badge="📱 Catálogos Digitales"
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80"
      />

      <div className="service-page">
        <div className="container">
          <FeatureGrid
            title="¿Por qué elegir nuestros catálogos digitales?"
            features={mainFeatures}
          />

          <WhatsAppFeature
            title="Compra por WhatsApp"
            description="Tu cliente elige los productos y la cantidad, los agrega al carrito y cuando termina, te envía el pedido directo por WhatsApp para cerrar la compra fácil y rápido."
          />

          <FeatureGrid
            title="Ideal para:"
            features={useCases}
            className="use-cases"
          />

          <BenefitsSection
            title="Beneficios de tener un Catálogo Digital"
            benefits={catalogBenefits}
          />

          <PricingSection
            title="Inversión"
            price="Desde $100.000 ARS"
            description="Catálogos profesionales y fáciles de usar, con código QR para que tus clientes vean tu oferta en el celular y puedan pedir rápido por WhatsApp."
            disclaimer="El precio base no incluye servicios de actualización o mantenimiento.
*Paquetes desde $25.000 ARS (hasta 5 cambios ocasionales).
*Plan mensual desde $30.000 ARS (cambios ilimitados y soporte)."
          />

          <CTASection
            title="¿Listo para tener tu catálogo digital?"
            description="Dejá que nos encarguemos de todo. En pocos días tendrás tu catálogo profesional listo para compartir con tus clientes."
            buttonText="Solicitar catálogo ahora"
          />
        </div>
      </div>
    </Layout>
  );
};

export default CatalogosPage;
