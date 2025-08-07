import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Importar páginas de servicios
import LandingPage from "./pages/LandingPage";
import WebProfesionalesPage from "./pages/WebProfesionalesPage";
import EcommercePage from "./pages/EcommercePage";
import CatalogosPage from "./pages/CatalogosPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Hero />
              <Services />
              <Portfolio />
              <CTA />
            </Layout>
          } />
          <Route path="/servicio/landing-page" element={<LandingPage />} />
          <Route path="/servicio/web-profesionales" element={<WebProfesionalesPage />} />
          <Route path="/servicio/ecommerce" element={<EcommercePage />} />
          <Route path="/servicio/catalogos-digitales" element={<CatalogosPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;