import React from "react";

const WhatsAppFeature = ({ title, description }) => (
  <div className="whatsapp-feature-section">
    <div className="whatsapp-feature-container">
      <div className="whatsapp-feature-content">
        <div className="whatsapp-icon-container">
          <div className="whatsapp-icon">
            <span>📱</span>
          </div>
          <div className="whatsapp-logo">
            <span>💬</span>
          </div>
        </div>
        <div className="whatsapp-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="whatsapp-visual">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="whatsapp-chat">
              <div className="chat-header">
                <span className="chat-title">WhatsApp</span>
              </div>
              <div className="chat-messages">
                <div className="message customer">
                  <span>Hola! Me interesa este producto 👕</span>
                </div>
                <div className="message business">
                  <span>¡Perfecto! Te envío los detalles 📦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style jsx>{`
      .whatsapp-feature-section {
        margin: 4rem 0;
        padding: 3rem 2rem;
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        border-radius: 20px;
        position: relative;
        overflow: hidden;
      }

      .whatsapp-feature-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
      }

      .whatsapp-feature-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .whatsapp-feature-content {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      .whatsapp-icon-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .whatsapp-icon {
        font-size: 4rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        animation: pulse 2s infinite;
      }

      .whatsapp-logo {
        position: absolute;
        bottom: -5px;
        right: -5px;
        font-size: 2rem;
        background: #25D366;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        animation: bounce 1.5s infinite;
      }

      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-8px);
        }
        60% {
          transform: translateY(-4px);
        }
      }

      .whatsapp-text h2 {
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .whatsapp-text p {
        color: rgba(255, 255, 255, 0.95);
        font-size: 1.2rem;
        line-height: 1.6;
        font-weight: 500;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      .whatsapp-visual {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .phone-mockup {
        width: 200px;
        height: 350px;
        background: #333;
        border-radius: 25px;
        padding: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        position: relative;
        transform: rotate(-5deg);
        transition: transform 0.3s ease;
      }

      .phone-mockup:hover {
        transform: rotate(0deg) scale(1.05);
      }

      .phone-screen {
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        border-radius: 15px;
        overflow: hidden;
      }

      .whatsapp-chat {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .chat-header {
        background: #075E54;
        color: white;
        padding: 15px;
        text-align: center;
        font-weight: 600;
      }

      .chat-messages {
        flex: 1;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background: #ECE5DD;
      }

      .message {
        max-width: 80%;
        padding: 10px 15px;
        border-radius: 15px;
        font-size: 0.9rem;
        line-height: 1.4;
        animation: slideIn 0.5s ease;
      }

      .message.customer {
        background: white;
        align-self: flex-end;
        border-bottom-right-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .message.business {
        background: #DCF8C6;
        align-self: flex-start;
        border-bottom-left-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .whatsapp-feature-section {
          padding: 2rem 1rem;
          margin: 3rem 0;
        }

        .whatsapp-feature-container {
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: center;
        }

        .whatsapp-feature-content {
          flex-direction: column;
          text-align: center;
        }

        .whatsapp-text h2 {
          font-size: 2rem;
        }

        .whatsapp-text p {
          font-size: 1.1rem;
        }

        .phone-mockup {
          width: 180px;
          height: 320px;
          transform: rotate(0deg);
        }

        .phone-mockup:hover {
          transform: scale(1.02);
        }
      }

      @media (max-width: 480px) {
        .whatsapp-feature-section {
          padding: 1.5rem 0.5rem;
        }

        .whatsapp-text h2 {
          font-size: 1.8rem;
        }

        .whatsapp-text p {
          font-size: 1rem;
        }

        .phone-mockup {
          width: 160px;
          height: 280px;
        }
      }
    `}</style>
  </div>
);

export default WhatsAppFeature;