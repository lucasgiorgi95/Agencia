import React from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

const LandingPage = () => (
  <Layout>
    <ServiceHero 
      title="Landing Pages que Convierten"
      description="Desarrollamos landing pages efectivas que transforman visitantes en clientes. Con diseños atractivos, optimizados para conversión y completamente adaptables a todos los dispositivos, maximizamos el retorno de tu inversión."
      badge="🚀 Alta Conversión"
      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
    />
    <div className="container" style={{ padding: '64px 0' }}>
      <h2>¿Por qué elegir nuestras Landing Pages?</h2>
      <p>Nuestro enfoque en el diseño y la experiencia del usuario asegura que cada landing page esté optimizada para lograr tus objetivos de negocio.</p>
    </div>
  </Layout>
);

export default LandingPage;
