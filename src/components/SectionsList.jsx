import React from "react";

const SectionsList = ({ title, description, sections }) => (
  <div className="section">
    <h2>{title}</h2>
    <p>{description}</p>
    <ul className="sections-list">
      {sections.map((section, index) => (
        <li key={index}>
          <strong>{section.name}:</strong> {section.description}
        </li>
      ))}
    </ul>
    
    <style jsx>{`
      .sections-list {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 8px;
        border-left: 4px solid #0070f3;
        margin: 2rem 0;
      }

      .sections-list li {
        margin-bottom: 0.8rem;
        line-height: 1.5;
        color: #333;
      }

      .sections-list li:last-child {
        margin-bottom: 0;
      }

      .sections-list strong {
        color: #0070f3;
      }

      @media (max-width: 768px) {
        .sections-list {
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .sections-list li {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }
      }

      @media (max-width: 480px) {
        .sections-list {
          padding: 1rem;
          border-left-width: 3px;
        }

        .sections-list li {
          font-size: 0.85rem;
        }
      }
    `}</style>
  </div>
);

export default SectionsList;