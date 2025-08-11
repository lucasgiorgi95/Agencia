import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al top solo en páginas de servicios, no en la página de inicio
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (location.hash) {
      // Si estamos en la página de inicio con un hash, hacer scroll a esa sección
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return children;
};

export default ScrollToTop;