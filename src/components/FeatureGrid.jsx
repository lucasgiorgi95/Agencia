import React from "react";

const FeatureGrid = ({ title, features, className = "features-grid" }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className={className}>
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
    
    <style jsx>{`
      .features-grid,
      .use-cases {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }

      .feature-card {
        background: white;
        border: 1px solid rgba(15, 23, 42, 0.1);
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: default;
      }

      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .feature-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 50px rgba(15, 23, 42, 0.15);
        border-color: rgba(99, 102, 241, 0.2);
      }

      .feature-card:hover::before {
        opacity: 1;
      }

      .feature-card::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s ease;
        z-index: 0;
      }

      .feature-card:hover::after {
        width: 300px;
        height: 300px;
      }

      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 1rem;
        background: rgba(99, 102, 241, 0.1);
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .feature-card:hover .feature-icon {
        background: rgba(99, 102, 241, 0.2);
        transform: scale(1.1) rotate(5deg);
      }

      .feature-card h3,
      .feature-card p {
        position: relative;
        z-index: 1;
      }

      @media (max-width: 768px) {
        .features-grid,
        .use-cases {
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .feature-card {
          padding: 1.5rem;
        }

        .feature-icon {
          font-size: 2rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          font-size: 0.9rem;
          line-height: 1.4;
        }
      }

      @media (max-width: 480px) {
        .features-grid,
        .use-cases {
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .feature-card {
          padding: 1.2rem;
        }

        .feature-icon {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </div>
);

export default FeatureGrid;