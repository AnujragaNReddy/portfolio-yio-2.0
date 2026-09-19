import useScrollReveal from '../hooks/useScrollReveal';
import { skills } from '../data/portfolioData';
import './Skills.css';

function Skills() {
  const [ref, isVisible] = useScrollReveal();

  const half = Math.ceil(skills.length / 2);
  const rowOne = skills.slice(0, half);
  const rowTwo = skills.slice(half);

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <p className="section-eyebrow">What I Do</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
      </div>

      <div className={`skills-marquee reveal ${isVisible ? 'reveal--visible' : ''}`} ref={ref}>
        <div className="marquee-row marquee-row--left">
          <div className="marquee-track">
            {[...rowOne, ...rowOne].map((skill, index) => (
              <span className="skill-pill" key={`${skill}-${index}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-row marquee-row--right">
          <div className="marquee-track">
            {[...rowTwo, ...rowTwo].map((skill, index) => (
              <span className="skill-pill skill-pill--alt" key={`${skill}-${index}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
