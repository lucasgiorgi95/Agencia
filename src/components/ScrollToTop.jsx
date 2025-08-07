import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al top cuando cambie la ruta
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;