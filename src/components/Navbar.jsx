import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { label: "Inicio", href: "/#hero" },
  // { label: "Portfolio", href: "/#portfolio" },
  { label: "Contacto", href: "/#contacto" },
];

const serviciosItems = [
  { label: "Landing Page", href: "/servicio/landing-page" },
  { label: "Webs Profesionales", href: "/servicio/web-profesionales" },
  // { label: "E-commerce", href: "/servicio/ecommerce" },
  { label: "Menú Digital", href: "/servicio/menu-digital" },
  { label: "Catálogos Digitales", href: "/servicio/catalogos-digitales" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    // Si ya estamos en la página de inicio, solo hacemos scroll
    if (location.pathname === '/') {
      const sectionId = path.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegamos a la home con el hash
      navigate(path);
    }
  };

  const handleServicioClick = (href) => {
    navigate(href);
    setIsServiciosOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServiciosOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a 
          href="/#hero" 
          className="navbar-logo"
          onClick={(e) => handleNavigation(e, '/#hero')}
        >
          {/* <span>GiorgiDev</span> */}
          <img src="/giorgistudio.png" alt="logo GiorgiStudio" />
        </a>
        <div className="navbar-content">
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="navbar-dropdown" ref={dropdownRef}>
              <button 
                className="navbar-dropdown-toggle"
                onClick={() => setIsServiciosOpen(!isServiciosOpen)}
              >
                Servicios
                <span className={`dropdown-arrow ${isServiciosOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isServiciosOpen && (
                <ul className="navbar-dropdown-menu">
                  {serviciosItems.map((servicio) => (
                    <li key={servicio.label}>
                      <button 
                        onClick={() => handleServicioClick(servicio.href)}
                        className="navbar-dropdown-item"
                      >
                        {servicio.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <a 
            href="/#contacto" 
            className="navbar-cta"
            onClick={(e) => handleNavigation(e, '/#contacto')}
          >
            Empezar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;