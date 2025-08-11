const projects = [
  {
    title: "E-commerce Fashion",
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Restaurant Menu",
    category: "Catálogo Digital",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
    tags: ["Vue.js", "Firebase", "PWA"],
  },
  {
    title: "Corporate Website",
    category: "Web Profesional",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    title: "Landing Page",
    category: "Web Simple",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="section-badge">
            <span>Portfolio</span>
          </div>
          <h2>Algunos de mis últimos trabajos</h2>
          <p>
            Desde webs simples hasta tiendas completas. Cada proyecto es único y
            personalizado.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-category">{project.category}</div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <div className="portfolio-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
