import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

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

const SocialMap = () => {
  const [activePin, setActivePin] = useState(null);

  const locations = [
    { id: 1, name: 'Saradhi Main Campus', coords: { x: '55%', y: '60%' }, address: 'Sreeraj S Chandran, Central Tower, MG Road' },
    { id: 2, name: 'Training Track A', coords: { x: '35%', y: '35%' }, address: 'Integrated Driving Track, Bypass Road' },
    { id: 3, name: 'Heavy Vehicle Track', coords: { x: '72%', y: '40%' }, address: 'Commercial Training Zone, Sector 4' }
  ];

  return (
    <section id="contact" className="social-map-section">
      
      {/* Instagram Feed Mockup Section */}
      <div className="instagram-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="insta-tag">Follow Us</span>
              <h2 className="insta-title">OUR INSTAGRAM FEED</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <InstagramIcon size={18} /> @saradhi_driving_academy
            </a>
          </div>
          
          <div className="insta-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400', label: 'Student passing test!' },
              { img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400', label: 'Training in white sedan' },
              { img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400', label: 'Commercial truck track' },
              { img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400', label: 'Safety cones alignment' },
              { img: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=400', label: 'Defensive maneuvers' }
            ].map((feed, idx) => (
              <div key={idx} className="insta-card">
                <img src={feed.img} alt={feed.label} className="insta-img" />
                <div className="insta-overlay">
                  <InstagramIcon size={24} />
                  <p>{feed.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map & Contact/Apply Section */}
      <div className="map-contact-section">
        <div className="container map-contact-grid">
          
          {/* Map display */}
          <div className="map-block aos-init" data-aos="fade-in-left">
            <div className="map-canvas">
              {/* Pinkish/soft map artwork */}
              <svg className="map-svg-art" viewBox="0 0 500 350">
                {/* Background Grid Lines */}
                <path d="M 0,50 L 500,70 M 0,150 L 500,120 M 0,250 L 500,280 M 100,0 L 80,350 M 250,0 L 290,350 M 400,0 L 370,350" stroke="#FFE9EC" strokeWidth="2.5" fill="none" />
                {/* Simulated Parks */}
                <path d="M 50,50 Q 80,30 110,60 T 150,110 T 80,120 Z" fill="#E8F8EE" />
                <path d="M 350,200 Q 400,170 420,220 T 450,280 T 360,290 Z" fill="#E8F8EE" />
                {/* Main Highways */}
                <path d="M 0,100 C 150,80 220,220 500,180" stroke="#FFDFDF" strokeWidth="12" fill="none" strokeLinecap="round" />
                <path d="M 0,100 C 150,80 220,220 500,180" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round" />
                
                <path d="M 200,0 C 230,120 180,220 280,350" stroke="#FFDFDF" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d="M 200,0 C 230,120 180,220 280,350" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" />

                {/* Secondary Roads */}
                <path d="M 80,50 L 220,115 L 300,100" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                <path d="M 250,180 L 380,200 L 450,150" stroke="#FFFFFF" strokeWidth="4" fill="none" />
              </svg>

              <div className="map-header-bar">
                <MapPin size={16} className="pin-red" />
                <span>SARADHI CAMPUSES (Interactive Map)</span>
              </div>

              {/* Location Pins */}
              {locations.map((loc) => (
                <div 
                  key={loc.id} 
                  className={`map-pin-node ${activePin === loc.id ? 'pin-active' : ''}`}
                  style={{ left: loc.coords.x, top: loc.coords.y }}
                  onMouseEnter={() => setActivePin(loc.id)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  <div className="pin-pulse"></div>
                  <div className="pin-core"></div>
                  
                  {/* Pin popup label */}
                  <div className="pin-tooltip">
                    <h5>{loc.name}</h5>
                    <p>{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact summary & Red Apply Now CTA */}
          <div className="contact-details-block aos-init" data-aos="fade-in-right">
            <div className="contact-brand-row">
              {/* Steering wheel logo */}
              <div className="contact-logo-wrapper">
                <svg className="contact-logo-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="8" fill="none" />
                  <circle cx="50" cy="50" r="35" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                  <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
                  <line x1="50" y1="5" x2="50" y2="40" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="18" y1="68" x2="42" y2="55" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="82" y1="68" x2="58" y2="55" stroke="#FFFFFF" strokeWidth="6" />
                </svg>
              </div>
              <span className="contact-brand-name">Saradhi</span>
            </div>

            <h3 className="contact-block-title">START YOUR JOURNEY TODAY</h3>
            <p className="contact-block-desc">
              Enroll today and take your first step toward absolute road mastery under Sreeraj S Chandran. Fill the registration card or contact us directly.
            </p>

            <div className="info-summary-cards">
              <div className="info-row-item">
                <Phone size={18} className="yellow-text" />
                <div>
                  <span>Call / WhatsApp Sreeraj:</span>
                  <strong>+91 94468 60000</strong>
                </div>
              </div>
              
              <div className="info-row-item">
                <Mail size={18} className="yellow-text" />
                <div>
                  <span>Office Email:</span>
                  <strong>sreeraj@saradhidrivingschool.com</strong>
                </div>
              </div>

              <div className="info-row-item">
                <Clock size={18} className="yellow-text" />
                <div>
                  <span>Office Hours:</span>
                  <strong>Mon - Sat: 7:00 AM - 7:00 PM</strong>
                </div>
              </div>
            </div>

            {/* RED Apply Button */}
            <a href="https://wa.me/919446860000" target="_blank" rel="noopener noreferrer" className="btn-red-apply">
              APPLY NOW <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .social-map-section {
          background-color: var(--black-deep);
          color: var(--text-light);
        }

        /* Instagram Section */
        .instagram-section {
          padding: 80px 0 40px 0;
          border-bottom: 1px solid var(--black-muted);
        }

        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .insta-tag {
          font-size: 0.85rem;
          color: var(--yellow-accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .insta-title {
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        .insta-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 576px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .insta-card {
          position: relative;
          aspect-ratio: 1;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--black-muted);
        }

        .insta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .insta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(11, 11, 12, 0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          padding: 1rem;
          text-align: center;
          gap: 0.5rem;
        }

        .insta-card:hover .insta-img {
          transform: scale(1.08);
        }

        .insta-card:hover .insta-overlay {
          opacity: 1;
        }

        .insta-overlay p {
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Map and Contact area */
        .map-contact-section {
          padding: 80px 0;
        }

        .map-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .map-contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        /* Vector Map style */
        .map-block {
          background-color: var(--black-light);
          border: 1px solid var(--black-muted);
          border-radius: 8px;
          padding: 12px;
          box-shadow: var(--shadow-lg);
        }

        .map-canvas {
          position: relative;
          background-color: #FFF3F4; /* Clean pinkish background */
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 1.4;
        }

        .map-svg-art {
          width: 100%;
          height: 100%;
          display: block;
        }

        .map-header-bar {
          position: absolute;
          top: 15px;
          left: 15px;
          background-color: var(--black-deep);
          color: var(--white-pure);
          border: 1px solid var(--black-muted);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pin-red {
          color: #FF3B30;
        }

        /* Interactive Pins */
        .map-pin-node {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 10;
        }

        .pin-core {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #FF3B30;
          border: 2px solid var(--white-pure);
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        .pin-pulse {
          position: absolute;
          top: -6px;
          left: -6px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(255, 59, 48, 0.4);
          animation: map-pulse 2s infinite;
          pointer-events: none;
        }

        @keyframes map-pulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        /* Tooltip layout */
        .pin-tooltip {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--black-deep);
          color: var(--white-pure);
          border: 1px solid var(--black-muted);
          padding: 0.8rem 1rem;
          border-radius: 4px;
          width: 200px;
          box-shadow: var(--shadow-lg);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-fast);
          z-index: 20;
          pointer-events: none;
        }

        .pin-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: var(--black-deep) transparent transparent transparent;
        }

        .map-pin-node:hover .pin-tooltip,
        .pin-active .pin-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .pin-tooltip h5 {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--yellow-accent);
          margin-bottom: 0.25rem;
        }

        .pin-tooltip p {
          font-size: 0.725rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        /* Contact summary block */
        .contact-details-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-brand-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-logo-wrapper {
          width: 32px;
          height: 32px;
        }

        .contact-logo-svg {
          width: 100%;
          height: 100%;
        }

        .contact-brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }

        .contact-block-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .contact-block-desc {
          color: #B4B4B9;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .info-summary-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
          width: 100%;
        }

        .info-row-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid var(--black-muted);
          padding-bottom: 1rem;
        }

        .yellow-text {
          color: var(--yellow-accent);
        }

        .info-row-item span {
          display: block;
          font-size: 0.775rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .info-row-item strong {
          font-size: 1.05rem;
          color: var(--white-pure);
        }

        /* Bold RED Apply CTA */
        .btn-red-apply {
          background-color: #E60000;
          color: var(--white-pure);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 1.1rem 2.5rem;
          border-radius: 4px;
          font-size: 0.95rem;
          transition: transform var(--transition-fast), background-color var(--transition-fast), box-shadow var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(230, 0, 0, 0.25);
          width: auto;
        }

        .btn-red-apply:hover {
          background-color: #FF1A1A;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(230, 0, 0, 0.35);
        }

        @media (max-width: 992px) {
          .btn-red-apply {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialMap;
