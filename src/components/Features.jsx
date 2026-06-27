import React from 'react';
import { Shield, Clock, Users, Car } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <Users size={24} />,
      title: 'EXPERIENCED INSTRUCTORS',
      description: 'Learn from government-certified professionals with years of safe teaching experience.'
    },
    {
      icon: <Clock size={24} />,
      title: 'FLEXIBLE SLOTS',
      description: 'Choose morning, evening, or weekend slots to match your busy personal schedule.'
    },
    {
      icon: <Shield size={24} />,
      title: 'PATIENT TRAINING',
      description: 'Zero-pressure, highly supportive instruction to help build real confidence step-by-step.'
    },
    {
      icon: <Car size={24} />,
      title: 'HIGH-END CARS',
      description: 'Practice in ultra-clean, modern white sedans equipped with dual safety controls.'
    }
  ];

  return (
    <section id="features" className="why-section">
      <div className="why-container container">
        
        <div className="why-content-column aos-init" data-aos="fade-in-left">
          <div className="why-header">
            <span className="section-tag-dark">Our Pillars</span>
            <h2 className="why-title">WHY SARADHI?</h2>
            <p className="why-subtitle">
              We go beyond passing the basic test. We focus on building modern, defensive driving intelligence.
            </p>
          </div>

          <div className="features-list-grid">
            {featuresList.map((item, idx) => (
              <div key={idx} className="feature-block-card aos-init" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                <div className="feature-icon-wrapper">
                  {item.icon}
                </div>
                <div className="feature-block-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-image-column aos-init" data-aos="fade-in-right">
          <div className="why-image-wrapper">
            <div className="yellow-strip-decor"></div>
            <img 
              src="/student_driver.png" 
              alt="Confident Student Driver" 
              className="why-driver-img"
            />
            {/* Float badges */}
            <div className="why-badge-float top-badge">
              <span className="badge-title">Safe Practice</span>
              <span className="badge-desc">Dual Control Cars</span>
            </div>
            <div className="why-badge-float bottom-badge">
              <span className="badge-title">1-on-1 Focus</span>
              <span className="badge-desc">No Shared Slots</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .why-section {
          background-color: var(--black-light);
          color: var(--text-light);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--black-muted);
          border-bottom: 1px solid var(--black-muted);
        }

        .why-section::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 211, 0, 0.03) 0%, rgba(0,0,0,0) 75%);
          top: -150px;
          right: -150px;
          pointer-events: none;
        }

        .why-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 5rem;
        }

        @media (max-width: 992px) {
          .why-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .why-header {
          margin-bottom: 3.5rem;
        }

        .section-tag-dark {
          font-size: 0.85rem;
          color: var(--yellow-accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-left: 2px solid var(--yellow-accent);
          padding-left: 0.75rem;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .why-title {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .why-subtitle {
          font-size: 1.05rem;
          color: #B4B4B9;
          max-width: 580px;
        }

        /* Features List block style with icon animation on hover */
        .features-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.25rem 2rem;
        }

        @media (max-width: 576px) {
          .features-list-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-block-card {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: transform var(--transition-fast);
        }

        .feature-block-card:hover {
          transform: translateX(4px);
        }

        .feature-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 4px;
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(255, 211, 0, 0.15);
          transition: transform var(--transition-normal), background-color var(--transition-normal), color var(--transition-normal);
        }

        /* Icon rotate animation on card hover */
        .feature-block-card:hover .feature-icon-wrapper {
          transform: rotate(15deg) scale(1.05);
          background-color: var(--white-pure);
          color: var(--black-deep);
        }

        .feature-block-info h3 {
          font-size: 1.025rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
          color: var(--white-pure);
        }

        .feature-block-info p {
          font-size: 0.9rem;
          color: #8C8C93;
          line-height: 1.5;
        }

        /* Driver Image frame */
        .why-image-column {
          display: flex;
          justify-content: center;
        }

        .why-image-wrapper {
          position: relative;
          border-radius: 8px;
          border: 1px solid var(--black-muted);
          background-color: var(--black-deep);
          padding: 12px;
          max-width: 380px;
          width: 100%;
        }

        .yellow-strip-decor {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 100px;
          height: 100px;
          border-top: 4px solid var(--yellow-accent);
          border-left: 4px solid var(--yellow-accent);
          z-index: 0;
          pointer-events: none;
        }

        .why-driver-img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
          filter: grayscale(20%) contrast(1.1);
          transition: transform var(--transition-slow), filter var(--transition-normal);
          z-index: 1;
          position: relative;
        }

        .why-image-wrapper:hover .why-driver-img {
          transform: scale(1.02);
          filter: grayscale(0%) contrast(1.15);
        }

        /* Float badges */
        .why-badge-float {
          position: absolute;
          background-color: rgba(11, 11, 12, 0.9);
          border: 1px solid var(--black-muted);
          backdrop-filter: blur(10px);
          padding: 0.6rem 1rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
          z-index: 2;
        }

        .top-badge {
          top: 30px;
          left: -40px;
          border-left: 3px solid var(--yellow-accent);
        }

        .bottom-badge {
          bottom: 40px;
          right: -30px;
          border-right: 3px solid var(--yellow-accent);
          text-align: right;
        }

        @media (max-width: 576px) {
          .top-badge {
            left: 10px;
          }
          .bottom-badge {
            right: 10px;
          }
        }

        .badge-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--white-pure);
        }

        .badge-desc {
          font-size: 0.7rem;
          color: var(--yellow-accent);
          font-weight: 600;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
};

export default Features;
