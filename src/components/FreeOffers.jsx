import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const FreeOffers = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      setSubmitted(true);
      // Reset after a brief delay
      setTimeout(() => {
        setEmail('');
        setPhone('');
      }, 5000);
    }
  };

  return (
    <section className="offers-section">
      <div className="offers-container container">
        
        {/* Folded Ribbon Container */}
        <div className="folded-ribbon-card aos-init" data-aos="zoom-in">
          <div className="ribbon-yellow-tag">FREE BONUS</div>
          
          <div className="ribbon-content-grid">
            
            {/* Handbook Book mockup */}
            <div className="handbook-mockup-wrapper">
              <img 
                src="/handbook_cover.png" 
                alt="Learner's Handbook 2024 Mockup" 
                className="handbook-img"
              />
              <div className="handbook-shadow"></div>
            </div>

            {/* Offer details & Form */}
            <div className="offers-form-wrapper">
              <span className="offer-badge-pill">Study Materials</span>
              <h2 className="offer-title">LEARNER'S HANDBOOK 2024</h2>
              <p className="offer-subtitle">
                Master the traffic signals, rules of road safety, and theoretical concepts before sitting in the cockpit. Get immediate digital access to our official RTO preparation guide.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="offers-form">
                  <div className="input-group-row">
                    <input 
                      type="email" 
                      placeholder="Enter your Email" 
                      className="form-input" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                    <input 
                      type="tel" 
                      placeholder="Enter your Phone" 
                      className="form-input" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn-primary form-submit-btn">
                    Get Access <Download size={16} />
                  </button>
                </form>
              ) : (
                <div className="download-success-toast">
                  <CheckCircle2 size={32} className="success-icon" />
                  <div>
                    <h4>Download Initiated Successfully!</h4>
                    <p>The handbook link has been sent to your email. Check your inbox shortly.</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .offers-section {
          background-color: var(--white-pure);
          padding: 80px 0;
          position: relative;
        }

        /* Folded ribbon look inspired by the reference mockup */
        .folded-ribbon-card {
          background: linear-gradient(135deg, #1A2035 0%, #0E1220 100%);
          border-radius: 12px;
          position: relative;
          padding: 4rem;
          color: var(--white-pure);
          box-shadow: var(--shadow-lg), 0 30px 60px rgba(14, 18, 32, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .folded-ribbon-card::after {
          content: '';
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255, 211, 0, 0.05) 0%, rgba(0,0,0,0) 70%);
          top: -125px;
          right: -125px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .folded-ribbon-card {
            padding: 2.5rem 1.5rem;
          }
        }

        .ribbon-yellow-tag {
          position: absolute;
          top: 30px;
          left: -40px;
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          padding: 0.5rem 3rem;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          transform: rotate(-35deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 10;
        }

        .ribbon-content-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          align-items: center;
          gap: 4rem;
        }

        @media (max-width: 992px) {
          .ribbon-content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
        }

        /* 3D Mockup Styling */
        .handbook-mockup-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .handbook-img {
          width: 70%;
          max-width: 240px;
          height: auto;
          border-radius: 4px;
          z-index: 2;
          transform: rotate(-6deg) perspective(600px) rotateY(15deg);
          box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.4);
          transition: transform var(--transition-normal);
        }

        .folded-ribbon-card:hover .handbook-img {
          transform: rotate(-3deg) perspective(600px) rotateY(10deg) translateY(-8px);
        }

        .handbook-shadow {
          position: absolute;
          width: 60%;
          height: 15px;
          background: rgba(0,0,0,0.5);
          filter: blur(10px);
          bottom: -15px;
          border-radius: 50%;
          z-index: 1;
        }

        /* Content & Form styling */
        .offers-form-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 992px) {
          .offers-form-wrapper {
            align-items: center;
          }
        }

        .offer-badge-pill {
          background-color: rgba(255, 211, 0, 0.1);
          border: 1px solid rgba(255, 211, 0, 0.2);
          color: var(--yellow-accent);
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .offer-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        @media (max-width: 576px) {
          .offer-title {
            font-size: 1.75rem;
          }
        }

        .offer-subtitle {
          color: #A0A5B5;
          font-size: 0.975rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 520px;
        }

        .offers-form {
          width: 100%;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .input-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 576px) {
          .input-group-row {
            grid-template-columns: 1fr;
          }
        }

        .form-input {
          background-color: rgba(0, 0, 0, 0.3);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: var(--white-pure);
          padding: 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
          width: 100%;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .form-input::placeholder {
          color: #6C7284;
        }

        .form-input:focus {
          border-color: var(--yellow-accent);
          background-color: rgba(0, 0, 0, 0.4);
          outline: none;
        }

        .form-submit-btn {
          align-self: flex-start;
          width: auto;
          box-shadow: 0 4px 15px rgba(255, 211, 0, 0.15);
        }

        @media (max-width: 992px) {
          .form-submit-btn {
            align-self: center;
            width: 100%;
          }
        }

        /* Success Toast */
        .download-success-toast {
          background-color: rgba(52, 199, 89, 0.1);
          border: 1px solid rgba(52, 199, 89, 0.2);
          border-radius: 6px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
          width: 100%;
          max-width: 520px;
        }

        .success-icon {
          color: #34C759;
          flex-shrink: 0;
        }

        .download-success-toast h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--white-pure);
          margin-bottom: 0.25rem;
        }

        .download-success-toast p {
          font-size: 0.85rem;
          color: #A0A5B5;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default FreeOffers;
