import React from "react";

const PricingSection = ({ title, price, description, disclaimer }) => (
  <div className="pricing-section">
    <h2>{title}</h2>
    <div className="pricing-card">
      <div className="price-tag">
        <span className="price">{price}</span>
      </div>
      <div className="pricing-content">
        <p className="pricing-description">{description}</p>
        {disclaimer && (
          <div className="pricing-disclaimer">
            {disclaimer.split('\n').map((line, index) => (
              <p key={index} style={{ margin: '0.5rem 0' }}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
    
    <style jsx>{`
      .pricing-section {
        margin: 4rem 0;
        padding: 0;
      }

      .pricing-section h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: #333;
      }

      .pricing-card {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border: 2px solid rgba(15, 23, 42, 0.1);
        border-radius: 16px;
        padding: 2.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 600px;
        margin: 0 auto;
      }

      .pricing-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .pricing-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(15, 23, 42, 0.15);
        border-color: rgba(99, 102, 241, 0.2);
      }

      .pricing-card:hover::before {
        opacity: 1;
      }

      .price-tag {
        margin-bottom: 1.5rem;
        position: relative;
        z-index: 1;
      }

      .price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0f172a;
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
        position: relative;
      }

      .price::after {
        content: '💰';
        position: absolute;
        top: -10px;
        right: -30px;
        font-size: 1.5rem;
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }

      .pricing-content {
        position: relative;
        z-index: 1;
      }

      .pricing-description {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #4a5568;
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .pricing-disclaimer {
        font-size: 0.95rem;
        color: #718096;
        font-style: italic;
        line-height: 1.5;
        border-top: 1px solid rgba(15, 23, 42, 0.1);
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }

      @media (max-width: 768px) {
        .pricing-section {
          margin: 3rem 0;
        }

        .pricing-card {
          padding: 2rem 1.5rem;
          margin: 0 1rem;
        }

        .price {
          font-size: 2rem;
        }

        .price::after {
          right: -25px;
          font-size: 1.2rem;
        }

        .pricing-description {
          font-size: 1rem;
        }

        .pricing-disclaimer {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .pricing-card {
          padding: 1.5rem 1rem;
          margin: 0 0.5rem;
        }

        .price {
          font-size: 1.8rem;
        }

        .price::after {
          right: -20px;
          font-size: 1rem;
        }

        .pricing-description {
          font-size: 0.95rem;
        }

        .pricing-disclaimer {
          font-size: 0.85rem;
        }
      }
    `}</style>
  </div>
);

export default PricingSection;