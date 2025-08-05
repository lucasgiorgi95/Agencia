const menuItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>GiorgiDev</span>
        </div>
        <div className="navbar-content">
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="navbar-cta">
            Empezar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;