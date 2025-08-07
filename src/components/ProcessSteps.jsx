import React from "react";

const ProcessSteps = ({ title, steps }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="process-steps">
      {steps.map((step, index) => (
        <div key={index} className="process-step">
          <div className="step-number">{index + 1}</div>
          <div className="step-content">{step}</div>
        </div>
      ))}
    </div>
    
    <style jsx>{`
      .process-steps {
        margin: 3rem 0;
        position: relative;
      }
      
      .process-step {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        position: relative;
        z-index: 1;
      }
      
      .step-number {
        width: 40px;
        height: 40px;
        background: #0070f3;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 1.5rem;
        flex-shrink: 0;
      }
      
      .step-content {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        flex-grow: 1;
        font-weight: 500;
      }
      
      @media (max-width: 768px) {
        .process-step {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .step-number {
          margin-bottom: 1rem;
          margin-right: 0;
        }

        .step-content {
          padding: 1rem;
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .process-steps {
          margin: 1.5rem 0;
        }

        .process-step {
          margin-bottom: 1.5rem;
        }

        .step-number {
          width: 35px;
          height: 35px;
          font-size: 0.9rem;
        }

        .step-content {
          padding: 0.8rem;
          font-size: 0.85rem;
        }
      }
    `}</style>
  </div>
);

export default ProcessSteps;