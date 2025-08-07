import React from "react";

const CTASection = ({ title, description, buttonText, buttonLink = "#contacto" }) => (
  <div className="cta-section">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={buttonLink} className="btn-primary">
      {buttonText}
    </a>
    
    <style jsx>{`
      .cta-section {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        margin-top: 4rem;
      }

      .cta-section h2 {
        margin-bottom: 1rem;
        color: #212529;
      }

      .cta-section p {
        color: #6c757d;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .btn-primary {
        display: inline-block;
        background: #0f172a;
        color: white;
        padding: 0.8rem 2.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        font-size: 1.1rem;
      }

      .btn-primary:hover {
        background: #0f172a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 112, 243, 0.2);
      }

      @media (max-width: 768px) {
        .cta-section {
          padding: 3rem 1.5rem;
          margin-top: 3rem;
        }

        .cta-section h2 {
          font-size: 1.5rem;
          line-height: 1.3;
        }

        .cta-section p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn-primary {
          padding: 0.8rem 2rem;
          font-size: 1rem;
        }
      }

      @media (max-width: 480px) {
        .cta-section {
          padding: 2rem 1rem;
          border-radius: 8px;
        }

        .cta-section h2 {
          font-size: 1.3rem;
        }

        .cta-section p {
          font-size: 0.9rem;
        }

        .btn-primary {
          padding: 0.7rem 1.5rem;
          font-size: 0.9rem;
        }
      }
    `}</style>
  </div>
);

export default CTASection;