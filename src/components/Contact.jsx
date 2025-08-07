import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig, contactInfo } from "../config/emailjs";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Inicializar EmailJS
  useEffect(() => {
    console.log("🔧 Inicializando EmailJS...");
    console.log("📋 Configuración completa:", emailjsConfig);
    emailjs.init(emailjsConfig.publicKey);
    console.log("✅ EmailJS inicializado correctamente");
  }, []);

  const sendEmail = (e) => {
    console.log("🚀 Función sendEmail ejecutada");

    // Prevenir comportamiento por defecto SIEMPRE
    e.preventDefault();
    e.stopPropagation();

    // Si ya está cargando, no hacer nada
    if (isLoading) {
      console.log("⏳ Ya está enviando, ignorando...");
      return false;
    }

    console.log("📧 Iniciando envío de email...");
    setIsLoading(true);
    setStatus("");

    // Usar configuración de EmailJS
    const { serviceId, templateId, publicKey } = emailjsConfig;
    console.log("🔧 Configuración:", { serviceId, templateId, publicKey });

    // Verificar que todos los valores existen
    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ Configuración incompleta:", {
        serviceId,
        templateId,
        publicKey,
      });
      setStatus("error");
      setIsLoading(false);
      return false;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("✅ Email enviado exitosamente:", result.text);
        setStatus("success");
        form.current.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error al enviar email:", error);
        setStatus("error");
        setIsLoading(false);
      });

    return false; // Asegurar que no hay navegación
  };
  return (
    <>
      <section id="contacto" className="contact">
        <div className="container">
          <div className="contact-header">
            <div className="section-badge">
              <span>Contacto</span>
            </div>
            <h2>¿Hablamos?</h2>
            <p>Contame qué necesitás y te respondo a la brevedad.</p>
          </div>
          <div className="contact-content">
            <div className="contact-form-section">
              <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="user_name">Nombre</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_phone">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service_type">Tipo de proyecto</label>
                  <select id="service_type" name="service_type" required>
                    <option value="">Selecciona un tipo</option>
                    <option value="landing">Landing Page</option>
                    <option value="web-profesional">Web Profesional</option>
                    <option value="catalogo">Catálogo Online</option>
                    <option value="ecommerce">Ecommerce</option>
                    <option value="catalogo-digital">Catálogo Digital</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Contame sobre tu proyecto..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                  {!isLoading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                {status === "success" && (
                  <div className="status-message success">
                    ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
                  </div>
                )}

                {status === "error" && (
                  <div className="status-message error">
                    ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
                  </div>
                )}
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 14C16.42 14 20 17.58 20 22H4C4 17.58 7.58 14 12 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="method-content">
                    <h4>LinkedIn</h4>
                    <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      /lucasmartingiorgi
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-availability">
                <div className="availability-badge">
                  <span className="status-dot"></span>
                  <span>Disponible para nuevos proyectos</span>
                </div>
                <p>Tiempo de respuesta promedio: 2-4 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Estilos específicos para móvil */
        .contact {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-section {
          width: 100%;
        }

        .contact-form {
          width: 100%;
          max-width: 100%;
        }

        .form-group {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
        }

        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        .status-message.success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .status-message.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        /* Responsive para tablet */
        @media (max-width: 1024px) {
          .container {
            padding: 0 1.5rem;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Responsive para móvil */
        @media (max-width: 768px) {
          .contact {
            padding: 3rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            padding: 0;
            margin: 0;
          }

          .form-group {
            margin-bottom: 1.25rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.6rem;
            font-size: 0.95rem;
          }

          .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-method {
            padding: 1rem;
          }
        }

        /* Responsive para móviles muy pequeños */
        @media (max-width: 480px) {
          .contact {
            padding: 2rem 0;
          }

          .container {
            padding: 0 0.75rem;
          }

          .contact-header h2 {
            font-size: 1.75rem;
          }

          .contact-header p {
            font-size: 0.95rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.5rem;
            font-size: 0.9rem;
          }

          .btn-primary {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }

          .status-message {
            padding: 0.8rem;
            font-size: 0.9rem;
          }

          .contact-method {
            padding: 0.8rem;
          }

          .method-content h4 {
            font-size: 0.95rem;
          }

          .method-content a {
            font-size: 0.85rem;
          }
        }

        /* Prevenir overflow horizontal */
        * {
          box-sizing: border-box;
        }

        input, select, textarea, button {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default Contact;
