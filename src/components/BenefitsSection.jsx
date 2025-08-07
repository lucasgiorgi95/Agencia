import React from "react";

const BenefitsSection = ({ title, benefits }) => (
  <div className="benefits-section">
    <h2>{title}</h2>
    <div className="benefits-grid">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <span className="check-icon">✓</span>
          <span>{benefit}</span>
        </div>
      ))}
    </div>
    
    <style jsx>{`
      .benefits-section {
        margin: 4rem 0;
        padding: 3rem 0;
        background: #f8f9fa;
        border-radius: 12px;
      }

      .benefits-section h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: #333;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }

      .benefit-item {
        display: flex;
        align-items: center;
        background: white;
        border: 1px solid rgba(15, 23, 42, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        font-weight: 500;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: default;
      }

      .benefit-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .benefit-item:hover {
        transform: translateY(-8px) scale(1.01);
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        border-color: rgba(40, 167, 69, 0.2);
      }

      .benefit-item:hover::before {
        opacity: 1;
      }

      .benefit-item::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(40, 167, 69, 0.08) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s ease;
        z-index: 0;
      }

      .benefit-item:hover::after {
        width: 200px;
        height: 200px;
      }

      .benefit-item span {
        position: relative;
        z-index: 1;
      }

      .check-icon {
        color: #28a745;
        font-weight: bold;
        margin-right: 1rem;
        font-size: 1.2rem;
        background: #d4edda;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        z-index: 1;
      }

      .benefit-item:hover .check-icon {
        background: #28a745;
        color: white;
        transform: scale(1.1) rotate(5deg);
      }

      @media (max-width: 768px) {
        .benefits-section {
          margin: 3rem 0;
          padding: 2rem 0;
        }

        .benefits-grid {
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }

        .benefit-item {
          padding: 1rem;
          font-size: 0.9rem;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          font-size: 1rem;
        }
      }

      @media (max-width: 480px) {
        .benefits-section {
          padding: 1.5rem 0;
        }

        .benefit-item {
          padding: 0.8rem;
          font-size: 0.85rem;
        }

        .check-icon {
          width: 18px;
          height: 18px;
          font-size: 0.9rem;
          margin-right: 0.8rem;
        }
      }
    `}</style>
  </div>
);

export default BenefitsSection;