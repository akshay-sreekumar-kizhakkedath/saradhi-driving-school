import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('car');

  const packagesData = {
    car: {
      title: 'Premium Car Training',
      subtitle: 'Master the wheels of modern luxury and utility sedans.',
      price: '$199',
      duration: '15 Hours',
      features: [
        'Defensive driving strategies',
        'Simulated hazard tests',
        'Parallel parking & reversing focus',
        'Dual-control training cars',
        'RTO license test support'
      ]
    },
    bike: {
      title: 'Pro Bike & Two-Wheeler',
      subtitle: 'Ride safely with balanced posture, gear control, and safety gear.',
      price: '$99',
      duration: '10 Hours',
      features: [
        'Balance & clutch control drills',
        'Emergency braking exercises',
        'Traffic navigation training',
        'Helmet & safety kit instructions',
        'RTO test tracks preparation'
      ]
    },
    heavy: {
      title: 'Heavy Vehicle & Commercial',
      subtitle: 'Professional transport license course for trucks and buses.',
      price: '$399',
      duration: '30 Hours',
      features: [
        'Large vehicle blind-spot controls',
        'Hill starts & heavy cargo balance',
        'Interstate rules & logs training',
        'Mechanical maintenance tips',
        'Commercial Licence paperwork assistance'
      ]
    }
  };

  return (
    <section id="packages" className="packages-section">
      <div className="packages-container container">
        <div className="packages-header aos-init" data-aos="fade-up">
          <span className="section-tag">Elite Programs</span>
          <h2 className="section-title">SELECT YOUR VEHICLE FOR TRAINING</h2>
          <p className="section-subtitle">
            We offer premium, focused programs designed to make you master any type of vehicle with utmost safety and supreme confidence.
          </p>
        </div>

        {/* Category Selector Grid */}
        <div className="category-selectors-grid aos-init" data-aos="fade-up">
          {/* Car Card */}
          <div 
            className={`category-card ${selectedCategory === 'car' ? 'category-card-active' : ''}`}
            onClick={() => setSelectedCategory('car')}
          >
            <div className="vehicle-svg-container">
              <svg className="vehicle-svg" viewBox="0 0 120 60">
                <path d="M10 38 Q10 25 25 25 L35 25 Q45 10 70 10 L85 10 Q105 10 110 25 L112 35 Q115 38 115 42 L115 46 Q115 48 110 48 L10 48 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="30" cy="46" r="10" fill="currentColor" />
                <circle cx="30" cy="46" r="4" fill="var(--white-pure)" />
                <circle cx="88" cy="46" r="10" fill="currentColor" />
                <circle cx="88" cy="46" r="4" fill="var(--white-pure)" />
                <rect x="36" y="16" width="22" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="64" y="16" width="22" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="category-card-title">Car Training</h3>
            <span className="category-card-btn">DETAILS <ChevronRight size={14} /></span>
          </div>

          {/* Bike Card */}
          <div 
            className={`category-card ${selectedCategory === 'bike' ? 'category-card-active' : ''}`}
            onClick={() => setSelectedCategory('bike')}
          >
            <div className="vehicle-svg-container">
              <svg className="vehicle-svg" viewBox="0 0 120 60">
                <circle cx="25" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="95" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 42 L48 42 L65 20 L88 20 L95 42" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M65 20 L55 35 L40 35" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M82 12 L88 20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="25" cy="42" r="4" fill="currentColor" />
                <circle cx="95" cy="42" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className="category-card-title">Bike Training</h3>
            <span className="category-card-btn">DETAILS <ChevronRight size={14} /></span>
          </div>

          {/* Heavy Vehicle Card */}
          <div 
            className={`category-card ${selectedCategory === 'heavy' ? 'category-card-active' : ''}`}
            onClick={() => setSelectedCategory('heavy')}
          >
            <div className="vehicle-svg-container">
              <svg className="vehicle-svg" viewBox="0 0 120 60">
                <rect x="10" y="15" width="70" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2" />
                <rect x="80" y="20" width="30" height="23" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2" />
                <circle cx="28" cy="45" r="9" fill="currentColor" />
                <circle cx="28" cy="45" r="3.5" fill="var(--white-pure)" />
                <circle cx="64" cy="45" r="9" fill="currentColor" />
                <circle cx="64" cy="45" r="3.5" fill="var(--white-pure)" />
                <circle cx="95" cy="45" r="9" fill="currentColor" />
                <circle cx="95" cy="45" r="3.5" fill="var(--white-pure)" />
                <line x1="80" y1="20" x2="80" y2="43" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <h3 className="category-card-title">Heavy Vehicle</h3>
            <span className="category-card-btn">DETAILS <ChevronRight size={14} /></span>
          </div>
        </div>

        {/* Selected Package Details Display */}
        <div className="package-display-panel aos-init" data-aos="zoom-in">
          <div className="panel-info">
            <h3 className="panel-title">{packagesData[selectedCategory].title}</h3>
            <p className="panel-subtitle">{packagesData[selectedCategory].subtitle}</p>
            
            <ul className="panel-features-list">
              {packagesData[selectedCategory].features.map((feature, idx) => (
                <li key={idx} className="panel-feature-item">
                  <div className="feature-check-icon">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-price-card">
            <div className="price-tag-wrapper">
              <span className="price-amt">{packagesData[selectedCategory].price}</span>
              <span className="price-duration">/ {packagesData[selectedCategory].duration}</span>
            </div>
            <p className="price-details-info">Complete training modules with modern safety instrumentation & study material.</p>
            <a href="#contact" className="btn-primary block-btn">
              Enroll Program <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .packages-section {
          background-color: var(--white-pure);
          padding: 100px 0;
        }

        .packages-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-tag {
          font-size: 0.85rem;
          color: var(--black-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-left: 2px solid var(--yellow-accent);
          border-right: 2px solid var(--yellow-accent);
          padding: 0 0.75rem;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--black-deep);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .section-subtitle {
          font-size: 1.025rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Selectors Grid */
        .category-selectors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 768px) {
          .category-selectors-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Package cards hover elevation & color shifting */
        .category-card {
          background-color: var(--white-soft);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          padding: 2.5rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: transform var(--transition-normal), background-color var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-card:hover {
          transform: translateY(-8px);
          background-color: var(--black-deep);
          color: var(--white-pure);
          border-color: var(--black-deep);
          box-shadow: var(--shadow-lg);
        }

        .category-card-active {
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          border-color: var(--yellow-accent);
          box-shadow: var(--shadow-accent);
        }

        .category-card-active:hover {
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          border-color: var(--yellow-accent);
          box-shadow: var(--shadow-accent);
        }

        .vehicle-svg-container {
          color: inherit;
          width: 120px;
          height: 60px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-normal);
        }

        .category-card:hover .vehicle-svg-container {
          transform: scale(1.08);
        }

        .vehicle-svg {
          width: 100%;
          height: 100%;
        }

        .category-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .category-card-btn {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .category-card:hover .category-card-btn {
          color: var(--yellow-accent);
        }

        .category-card-active .category-card-btn {
          color: var(--black-deep);
        }

        /* Detail Panel display style */
        .package-display-panel {
          background-color: var(--black-light);
          color: var(--white-pure);
          border-radius: 8px;
          border: 1px solid var(--black-muted);
          padding: 3rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 992px) {
          .package-display-panel {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 2rem;
          }
        }

        .panel-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--yellow-accent);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .panel-subtitle {
          color: #B4B4B9;
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }

        .panel-features-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 2rem;
        }

        @media (max-width: 576px) {
          .panel-features-list {
            grid-template-columns: 1fr;
          }
        }

        .panel-feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--white-soft);
        }

        .feature-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: rgba(255, 211, 0, 0.15);
          color: var(--yellow-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .panel-price-card {
          background-color: var(--black-deep);
          border: 1px solid var(--black-muted);
          border-radius: 6px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .price-tag-wrapper {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .price-amt {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 900;
          color: var(--yellow-accent);
          line-height: 1;
        }

        .price-duration {
          color: var(--text-muted);
          font-size: 1rem;
          font-weight: 600;
        }

        .price-details-info {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .block-btn {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default Packages;
