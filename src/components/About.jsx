import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Calendar, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        <div className="about-image-column aos-init" data-aos="fade-in-left">
          <div className="about-image-frame">
            <img 
              src="/driving_training.png" 
              alt="Driving instruction at Saradhi Driving School" 
              className="about-img"
            />
            <div className="experience-badge">
              <span className="exp-years">15+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className="about-content-column aos-init" data-aos="fade-in-right">
          <div className="about-subtitle-row">
            <div className="accent-line"></div>
            <span className="about-tag">About Our Academy</span>
          </div>
          <h2 className="about-title">
            MASTER THE ROAD<br />
            <span className="yellow-glow">WITH SARADHI.</span>
          </h2>
          
          <p className="about-description">
            Saradhi Driving School is a premier corporate academy dedicated to developing defensive, safe, and highly skilled drivers. We believe driving is more than just getting licensed—it is a critical life skill that requires precision, patience, and professional instruction.
          </p>

          <div className="safety-points-grid">
            <div className="safety-point">
              <div className="point-icon-box">
                <ShieldCheck size={20} className="yellow-icon" />
              </div>
              <div className="point-info">
                <h3>Personalized Safety Attention</h3>
                <p>One-on-one instruction tailored to your confidence levels and pace.</p>
              </div>
            </div>

            <div className="safety-point">
              <div className="point-icon-box">
                <CheckCircle2 size={20} className="yellow-icon" />
              </div>
              <div className="point-info">
                <h3>Defensive Driving Methods</h3>
                <p>We train you to read and anticipate the road for lifetime safety.</p>
              </div>
            </div>

            <div className="safety-point">
              <div className="point-icon-box">
                <Award size={20} className="yellow-icon" />
              </div>
              <div className="point-info">
                <h3>Certified Instructors</h3>
                <p>Learn from professionally licensed experts with deep safety credentials.</p>
              </div>
            </div>
          </div>

          <div className="about-footer-row">
            <a href="#packages" className="btn-primary">
              Our Packages <ArrowRight size={16} />
            </a>
            
            {/* Custom Interactive Traffic Light graphic */}
            <div className="traffic-light-widget" title="Safety is our green signal">
              <div className="traffic-light-body">
                <div className="light light-red" />
                <div className="light light-yellow" />
                <div className="light light-green" />
              </div>
              <span className="traffic-light-label">DRIVE SAFE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--black-deep);
          color: var(--text-light);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 211, 0, 0.05) 0%, rgba(0,0,0,0) 70%);
          bottom: -100px;
          left: -100px;
          pointer-events: none;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          align-items: center;
          gap: 5rem;
        }

        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        /* Image styling and hover zoom */
        .about-image-column {
          display: flex;
          justify-content: center;
        }

        .about-image-frame {
          position: relative;
          border-radius: 8px;
          padding: 12px;
          border: 1px solid var(--black-muted);
          background-color: var(--black-light);
          box-shadow: var(--shadow-lg);
          max-width: 480px;
          width: 100%;
          overflow: hidden;
        }

        .about-img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
          filter: grayscale(10%) contrast(1.1);
          transition: transform var(--transition-slow), filter var(--transition-normal);
        }

        .about-image-frame:hover .about-img {
          transform: scale(1.05);
          filter: grayscale(0%) contrast(1.15);
        }

        .experience-badge {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          padding: 0.8rem 1.2rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .exp-years {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          line-height: 1;
        }

        .exp-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.2;
          width: 80px;
        }

        /* Content Styling */
        .about-subtitle-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .accent-line {
          width: 40px;
          height: 2px;
          background-color: var(--yellow-accent);
        }

        .about-tag {
          color: var(--yellow-accent);
          font-size: 0.85rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .about-title {
          font-size: 3rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .yellow-glow {
          color: var(--yellow-accent);
          text-shadow: 0 0 30px rgba(255, 211, 0, 0.2);
        }

        @media (max-width: 576px) {
          .about-title {
            font-size: 2.25rem;
          }
        }

        .about-description {
          font-size: 1.05rem;
          color: #B4B4B9;
          margin-bottom: 2.5rem;
        }

        /* Safety points */
        .safety-points-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .safety-point {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .point-icon-box {
          background-color: var(--black-muted);
          border: 1px solid #333336;
          border-radius: 6px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .yellow-icon {
          color: var(--yellow-accent);
        }

        .point-info h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--white-pure);
        }

        .point-info p {
          font-size: 0.925rem;
          color: #8C8C93;
        }

        .about-footer-row {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        /* Traffic Light Widget Graphic */
        .traffic-light-widget {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--black-light);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          border: 1px solid var(--black-muted);
        }

        .traffic-light-body {
          display: flex;
          gap: 6px;
          background-color: #000000;
          padding: 6px 10px;
          border-radius: 20px;
          border: 1.5px solid #222;
        }

        .light {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          opacity: 0.3;
        }

        .light-red {
          background-color: #FF3B30;
          animation: signal-glow-red 6s infinite;
        }

        .light-yellow {
          background-color: #FFCC00;
          animation: signal-glow-yellow 6s infinite;
        }

        .light-green {
          background-color: #34C759;
          animation: signal-glow-green 6s infinite;
        }

        .traffic-light-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--yellow-accent);
        }
      `}</style>
    </section>
  );
};

export default About;
