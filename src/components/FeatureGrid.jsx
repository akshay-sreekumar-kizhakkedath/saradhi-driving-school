import React from 'react';
import { Award, Compass, ShieldCheck, Calendar, Activity } from 'lucide-react';

const FeatureGrid = () => {
  const highlights = [
    {
      icon: <Compass size={24} />,
      title: 'MODERN FACILITIES',
      desc: 'Smart test simulators and modern classrooms.'
    },
    {
      icon: <Activity size={24} />,
      title: 'SUCCESS RATE',
      desc: '100% license acquisition success track record.'
    },
    {
      icon: <Award size={24} />,
      title: 'CERTIFIED TRAINING',
      desc: 'Officially government-approved driving syllabus.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'FLEXIBLE TIMES',
      desc: 'Self-scheduled morning, day, or evening slots.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'FLEXIBLE TRAINING',
      desc: 'Personalized pacing for nervous/beginner learners.'
    }
  ];

  return (
    <section className="grid-section">
      <div className="grid-container container">
        <div className="highlights-row">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="highlight-card aos-init" 
              data-aos="fade-up" 
              data-aos-delay={`${idx * 80}`}
            >
              <div className="highlight-icon-box">
                {item.icon}
              </div>
              <h3 className="highlight-card-title">{item.title}</h3>
              <p className="highlight-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .grid-section {
          background-color: var(--white-pure);
          padding: 60px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .highlights-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 992px) {
          .highlights-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .highlights-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .highlights-row {
            grid-template-columns: 1fr;
          }
        }

        .highlight-card {
          text-align: center;
          padding: 1.5rem 1rem;
          border-radius: 6px;
          transition: transform var(--transition-fast), background-color var(--transition-fast);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          background-color: var(--white-soft);
        }

        .highlight-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1.5px solid var(--yellow-accent);
          color: var(--black-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
          background-color: rgba(255, 211, 0, 0.05);
        }

        .highlight-card:hover .highlight-icon-box {
          background-color: var(--yellow-accent);
          color: var(--black-deep);
          transform: scale(1.05);
        }

        .highlight-card-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--black-deep);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .highlight-card-desc {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.4;
          max-width: 160px;
        }
      `}</style>
    </section>
  );
};

export default FeatureGrid;
