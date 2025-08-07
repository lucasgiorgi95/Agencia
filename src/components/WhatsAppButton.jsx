import React, { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Número de WhatsApp (cambiar por el tuyo)
  const phoneNumber = "3764101469"; // Formato: código país + número sin espacios
  const message =
    "¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contactar por WhatsApp"
      >
        <div className="whatsapp-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
              fill="currentColor"
            />
          </svg>
        </div>

        {isHovered && (
          <div className="whatsapp-tooltip">¡Hablemos por WhatsApp!</div>
        )}
      </a>

      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          color: white;
          cursor: pointer;
          animation: pulse 2s infinite;
        }

        .whatsapp-button:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
          background: #128c7e;
        }

        .whatsapp-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .whatsapp-button:hover .whatsapp-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .whatsapp-tooltip {
          position: absolute;
          left: -200px;
          top: 50%;
          transform: translateY(-50%);
          background: #0f172a;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.2);
          animation: slideIn 0.3s ease-out;
        }

        .whatsapp-tooltip::after {
          content: "";
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          border: 8px solid transparent;
          border-right-color: #0f172a;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5),
              0 0 0 10px rgba(37, 211, 102, 0.1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .whatsapp-button {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 55px;
            height: 55px;
          }

          .whatsapp-tooltip {
            left: -180px;
            font-size: 0.8rem;
            padding: 0.6rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-button {
            bottom: 1rem;
            right: 1rem;
            width: 50px;
            height: 50px;
          }

          .whatsapp-icon svg {
            width: 24px;
            height: 24px;
          }

          .whatsapp-tooltip {
            display: none; /* Ocultar tooltip en móviles muy pequeños */
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
