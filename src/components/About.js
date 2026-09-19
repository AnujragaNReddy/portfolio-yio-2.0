import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { profile } from '../data/portfolioData';
import './About.css';

function StatItem({ stat, isActive }) {
  const match = String(stat.value).match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isActive || startedRef.current) return undefined;
    startedRef.current = true;

    const duration = 1400;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(numericTarget * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, numericTarget]);

  return (
    <div className="about-stat">
      <span className="about-stat-number">
        {value}
        {suffix}
      </span>
      <span>{stat.label}</span>
    </div>
  );
}

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className={`about-inner reveal ${isVisible ? 'reveal--visible' : ''}`} ref={ref}>
        <div className="about-avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <div className="about-text">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Design-minded developer, detail-obsessed builder.</h2>
          <p className="about-body">{profile.bio}</p>
          <div className="about-stats">
            {profile.stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} isActive={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
