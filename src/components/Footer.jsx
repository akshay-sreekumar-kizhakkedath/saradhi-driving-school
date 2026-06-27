import React from 'react';
import { Shield } from 'lucide-react';

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="footer-logo-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#FFD300" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="#FFD300" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="10" fill="#FFD300" />
                <line x1="50" y1="5" x2="50" y2="40" stroke="#FFD300" strokeWidth="6" />
                <line x1="18" y1="68" x2="42" y2="55" stroke="#FFD300" strokeWidth="6" />
                <line x1="82" y1="68" x2="58" y2="55" stroke="#FFD300" strokeWidth="6" />
              </svg>
              <span>Saradhi</span>
            </div>
            <p className="footer-brand-tag">High-End Corporate Driving School</p>
          </div>

          <div className="footer-links-col">
            <h4>Quick Nav</h4>
            <a href="#home">Home</a>
            <a href="#about">About Academy</a>
            <a href="#packages">Programs</a>
            <a href="#features">Why Us</a>
          </div>

          <div className="footer-links-col">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#refund">Refund Policy</a>
            <a href="#licence">Licensing Rules</a>
          </div>

          <div className="footer-social-col">
            <h4>Connect With Us</h4>
            <p>Stay up to date with modern defensive driving safety insights.</p>
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright-text">
            Saradhi Driving School | Contact: <strong>Sreeraj S Chandran</strong> | Phone: <strong>+91 94468 60000</strong> | Email: <strong>sreeraj@saradhidrivingschool.com</strong>
          </p>
          <p className="footer-rights-text">
            Copyright © 2024 Saradhi Driving School. All Rights Reserved. Designed to exceed standard safety targets.
          </p>
        </div>
      </div>

      <style>{`
        .footer-area {
          background-color: var(--black-deep);
          color: var(--white-pure);
          border-top: 1px solid var(--black-muted);
          padding: 80px 0 40px 0;
          font-family: var(--font-body);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
          gap: 4rem;
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .footer-logo-svg {
          width: 32px;
          height: 32px;
        }

        .footer-brand-tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col h4, .footer-social-col h4 {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--yellow-accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .footer-links-col a {
          font-size: 0.9rem;
          color: #B4B4B9;
          transition: color var(--transition-fast);
        }

        .footer-links-col a:hover {
          color: var(--yellow-accent);
        }

        .footer-social-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-social-col p {
          font-size: 0.875rem;
          color: #B4B4B9;
          line-height: 1.5;
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          background-color: var(--black-light);
          border: 1px solid var(--black-muted);
          color: var(--white-pure);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-icon:hover {
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          border-color: var(--yellow-accent);
          transform: translateY(-2px);
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid var(--black-muted);
          padding-top: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-copyright-text {
          font-size: 0.85rem;
          color: #D2D2D6;
        }

        .footer-copyright-text strong {
          color: var(--yellow-accent);
        }

        .footer-rights-text {
          font-size: 0.775rem;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
