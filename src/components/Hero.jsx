import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">

        {/* Left: Copy */}
        <div className="hero-copy">
          <p className="hero-eyebrow">Saradhi Driving School</p>
          <h1 className="hero-heading">
            Learn to drive<br />
            the <span className="accent-word">right way.</span>
          </h1>
          <p className="hero-body">
            Personalised training for cars, bikes, and heavy vehicles. Expert guidance, flexible schedules, and a 100% RTO pass record — led by Sreeraj S Chandran.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-enroll">
              Enroll Now <ArrowRight size={16} />
            </a>
            <a href="tel:+919446860000" className="btn-call">
              <Phone size={14} />
              +91 94468 60000
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="trust-sep"></div>
            <div className="trust-item">
              <strong>100%</strong>
              <span>RTO Pass Rate</span>
            </div>
            <div className="trust-sep"></div>
            <div className="trust-item">
              <strong>5000+</strong>
              <span>Licensed Drivers</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-visual">
          <div className="hero-img-frame">
            <img
              src="/hero_white_sedan.png"
              alt="Saradhi Driving School training car"
              className="hero-car"
            />
          </div>
          <div className="hero-badge-float">
            <span className="badge-dot"></span>
            Classes Available Now
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="hero-strip">
        <div className="container strip-inner">
          {['Car License', 'Bike License', 'Heavy Vehicle', 'Learner\'s Permit', 'RTO Test Prep', 'Defensive Driving'].map((item, i, arr) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {i < arr.length - 1 && <span className="strip-dot" aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        /* ─── Hero Section ─── */
        .hero-section {
          background: #fff;
          padding-top: 120px;
          padding-bottom: 0;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 5rem;
          padding-bottom: 4rem;
        }

        /* ─── Copy ─── */
        .hero-copy {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hero-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--black-deep);
          margin-bottom: 1.25rem;
        }

        .accent-word {
          color: var(--yellow-hover);
        }

        .hero-body {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 420px;
        }

        /* ─── CTAs ─── */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .btn-enroll {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--yellow-accent);
          color: var(--black-deep);
          font-size: 0.875rem;
          font-weight: 700;
          padding: 0.85rem 1.75rem;
          border-radius: 4px;
          transition: background var(--transition-fast), transform var(--transition-fast);
          white-space: nowrap;
        }

        .btn-enroll:hover {
          background: var(--yellow-hover);
          transform: translateY(-1px);
        }

        .btn-call {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--black-deep);
          opacity: 0.75;
          transition: opacity var(--transition-fast);
          white-space: nowrap;
        }

        .btn-call:hover {
          opacity: 1;
        }

        /* ─── Trust Numbers ─── */
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .trust-item strong {
          font-size: 1.6rem;
          font-weight: 900;
          line-height: 1;
          color: var(--black-deep);
          font-family: var(--font-heading);
        }

        .trust-item span {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .trust-sep {
          width: 1px;
          height: 36px;
          background: rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        /* ─── Visual Panel ─── */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .hero-img-frame {
          width: 100%;
          background: var(--white-soft);
          border-radius: 8px;
          padding: 3rem 2.5rem 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          border-top: 3px solid var(--yellow-accent);
        }

        .hero-car {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.12));
        }

        .hero-badge-float {
          position: absolute;
          bottom: -14px;
          left: 20px;
          background: var(--black-deep);
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          white-space: nowrap;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          50% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }

        /* ─── Bottom Strip ─── */
        .hero-strip {
          border-top: 1px solid rgba(0,0,0,0.07);
          background: var(--white-soft);
          margin-top: 1.5rem;
        }

        .strip-inner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 0.9rem;
          padding-bottom: 0.9rem;
          flex-wrap: wrap;
        }

        .strip-inner > span {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }

        .strip-dot {
          color: var(--yellow-accent) !important;
          font-size: 1.1rem !important;
          line-height: 1;
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hero-section { padding-top: 100px; }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-bottom: 3rem;
            text-align: center;
          }

          .hero-body { max-width: 100%; }

          .hero-actions { justify-content: center; }

          .hero-trust { justify-content: center; }

          .hero-visual { order: -1; }

          .hero-img-frame {
            max-width: 380px;
            margin: 0 auto;
            padding: 2rem 2rem 0;
          }

          .hero-badge-float {
            left: 50%;
            transform: translateX(-50%);
            bottom: -14px;
          }
        }

        @media (max-width: 540px) {
          .hero-heading { font-size: 2.25rem; }

          .hero-img-frame {
            max-width: 100%;
            padding: 1.5rem 1.25rem 0;
          }

          .hero-badge-float { display: none; }

          .strip-inner { gap: 0.5rem; }

          .strip-dot { display: none; }

          .strip-inner > span {
            background: var(--white-soft);
            border: 1px solid rgba(0,0,0,0.08);
            padding: 0.2rem 0.6rem;
            border-radius: 50px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
