import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { label: "Inicio", href: "/#hero" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contacto", href: "/#contacto" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* <span>GiorgiDev</span> */}
          <img src="/giorgi.png" alt="logo GiorgiDev" />
        </Link>
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