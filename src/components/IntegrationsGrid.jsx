import React from "react";

const IntegrationsGrid = ({ title, integrations }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="integrations-grid">
      {integrations.map((integration, index) => (
        <div key={index} className="integration-card">
          <div className="integration-icon">{integration.icon}</div>
          <h3>{integration.title}</h3>
          <p>{integration.desc}</p>
        </div>
      ))}
    </div>
    
    <style jsx>{`
      .integrations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 3rem 0;
      }

      .integration-card {
        background: white;
        border: 1px solid rgba(15, 23, 42, 0.1);
        border-radius: 16px;
        padding: 1.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: default;
        border-left: 4px solid #28a745;
      }

      .integration-card::before {
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

      .integration-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 50px rgba(15, 23, 42, 0.15);
        border-color: rgba(40, 167, 69, 0.3);
      }

      .integration-card:hover::before {
        opacity: 1;
      }

      .integration-card::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(40, 167, 69, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s ease;
        z-index: 0;
      }

      .integration-card:hover::after {
        width: 300px;
        height: 300px;
      }

      .integration-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 0.8rem;
        background: rgba(40, 167, 69, 0.1);
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .integration-card:hover .integration-icon {
        background: rgba(40, 167, 69, 0.2);
        transform: scale(1.1) rotate(5deg);
      }

      .integration-card h3 {
        color: #28a745;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        position: relative;
        z-index: 1;
      }

      .integration-card p {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
        position: relative;
        z-index: 1;
      }

      @media (max-width: 768px) {
        .integrations-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
          margin: 2rem 0;
        }

        .integration-card {
          padding: 1.2rem;
        }

        .integration-icon {
          font-size: 1.8rem;
        }

        .integration-card h3 {
          font-size: 0.9rem;
        }

        .integration-card p {
          font-size: 0.8rem;
        }
      }

      @media (max-width: 480px) {
        .integrations-grid {
          gap: 0.8rem;
        }

        .integration-card {
          padding: 1rem;
        }

        .integration-icon {
          font-size: 1.6rem;
        }
      }
    `}</style>
  </div>
);

export default IntegrationsGrid;