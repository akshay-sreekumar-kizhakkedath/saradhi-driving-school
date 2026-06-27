import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="logo-area">
          <div className="logo-icon-wrapper">
            <svg className="logo-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#E60000" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="35" stroke="#E60000" strokeWidth="3" fill="none" />
              <circle cx="50" cy="50" r="10" fill="#E60000" />
              <line x1="50" y1="5" x2="50" y2="40" stroke="#E60000" strokeWidth="6" />
              <line x1="18" y1="68" x2="42" y2="55" stroke="#E60000" strokeWidth="6" />
              <line x1="82" y1="68" x2="58" y2="55" stroke="#E60000" strokeWidth="6" />
            </svg>
          </div>
          <span className="logo-text">Saradhi</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#packages" className="nav-link">Packages</a>
          <a href="#features" className="nav-link">Why Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Contact Info Widget */}
        <div className="header-contact">
          <span className="contact-label">Sreeraj S Chandran:</span>
          <div className="contact-icons">
            <a href="https://wa.me/919446860000" target="_blank" rel="noopener noreferrer" className="contact-icon-btn whatsapp" title="WhatsApp Sreeraj">
              <MessageSquare size={16} fill="currentColor" />
            </a>
            <a href="tel:+919446860000" className="contact-icon-btn phone" title="Call Sreeraj">
              <Phone size={16} fill="currentColor" />
            </a>
            <a href="mailto:sreeraj@saradhidrivingschool.com" className="contact-icon-btn email" title="Email Sreeraj">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Btn */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#packages" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Packages</a>
          <a href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          <div className="mobile-contact-info">
            <p className="mobile-contact-label">Sreeraj S Chandran</p>
            <div className="mobile-contact-row">
              <a href="tel:+919446860000" className="mobile-contact-item">
                <Phone size={18} /> +91 94468 60000
              </a>
              <a href="mailto:sreeraj@saradhidrivingschool.com" className="mobile-contact-item">
                <Mail size={18} /> sreeraj@saradhidrivingschool.com
              </a>
            </div>
          </div>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all var(--transition-normal);
        }
        
        .header-scrolled {
          padding: 0.5rem 0;
          box-shadow: var(--shadow-sm);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem 1.25rem;
          }
        }

        /* Logo styling */
        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon-wrapper {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-svg {
          width: 100%;
          height: 100%;
          transform: rotate(0deg);
          transition: transform var(--transition-normal);
        }

        .logo-area:hover .logo-svg {
          transform: rotate(45deg);
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--black-deep);
          letter-spacing: -0.03em;
        }

        /* Desktop Nav Link Underline Hover Animation */
        .desktop-nav {
          display: flex;
          gap: 2.25rem;
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.925rem;
          color: var(--black-deep);
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--yellow-accent);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .nav-link:hover {
          color: var(--black-light);
        }

        /* Contact Area */
        .header-contact {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .contact-icons {
          display: flex;
          gap: 0.5rem;
        }

        .contact-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: var(--white-soft);
          color: var(--black-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-icon-btn:hover {
          transform: translateY(-2px);
        }

        .contact-icon-btn.whatsapp:hover {
          background-color: #25D366;
          color: var(--white-pure);
          border-color: #25D366;
        }

        .contact-icon-btn.phone:hover {
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          border-color: var(--yellow-accent);
        }

        .contact-icon-btn.email:hover {
          background-color: var(--black-deep);
          color: var(--white-pure);
          border-color: var(--black-deep);
        }

        .mobile-menu-btn {
          display: none;
          color: var(--black-deep);
        }

        /* Mobile Menu Panel */
        .mobile-menu {
          position: fixed;
          top: 75px;
          left: 0;
          width: 100%;
          height: 0;
          overflow: hidden;
          background-color: var(--white-pure);
          transition: height var(--transition-normal);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: var(--shadow-md);
        }

        .mobile-menu-open {
          height: 380px;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--black-deep);
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
          padding-bottom: 0.5rem;
        }

        .mobile-contact-info {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-contact-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .mobile-contact-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 550;
          color: var(--black-light);
        }

        @media (max-width: 992px) {
          .desktop-nav, .header-contact {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
