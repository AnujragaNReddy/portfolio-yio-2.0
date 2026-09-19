import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';
import './Projects.css';

function Projects() {
  const [ref, isVisible] = useScrollReveal();

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height - 0.5) * -12).toFixed(2);
    const rotateY = ((x / rect.width - 0.5) * 12).toFixed(2);
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-title">Projects I&apos;m proud of</h2>
        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className={`project-card reveal ${isVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div
                className="project-thumb"
                style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
              >
                <span role="img" aria-hidden="true">
                  {project.emoji}
                </span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--ghost"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
