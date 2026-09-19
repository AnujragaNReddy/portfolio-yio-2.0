import { profile } from '../data/portfolioData';
import useMagnetic from '../hooks/useMagnetic';
import useTypewriter from '../hooks/useTypewriter';
import './Hero.css';

function Hero() {
  const roleText = useTypewriter(profile.roles ?? [profile.role]);
  const primaryRef = useMagnetic();
  const ghostRef = useMagnetic();

  return (
    <section id="hero" className="hero">
      <div className="hero-blob hero-blob--one" />
      <div className="hero-blob hero-blob--two" />
      <div className="hero-blob hero-blob--three" />

      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I&apos;m</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">
          {roleText}
          <span className="hero-role-cursor" aria-hidden="true" />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary" ref={primaryRef}>
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost" ref={ghostRef}>
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

export default Hero;
