import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Contact />
    </>
  );
}

export default App;