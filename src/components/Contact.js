import useScrollReveal from '../hooks/useScrollReveal';
import useMagnetic from '../hooks/useMagnetic';
import { profile, socials } from '../data/portfolioData';
import './Contact.css';

const ICONS = {
  GitHub: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.2 8.24L23.3 22h-6.6l-5.16-6.75L5.6 22H2.47l7.7-8.8L1 2h6.77l4.66 6.17L18.9 2Zm-1.16 18h1.73L7.34 3.9H5.5L17.74 20Z" />
    </svg>
  ),
};

function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const buttonRef = useMagnetic();

  return (
    <section id="contact" className="contact">
      <div className="contact-blob contact-blob--one" />
      <div className="contact-blob contact-blob--two" />

      <div className={`contact-inner reveal ${isVisible ? 'reveal--visible' : ''}`} ref={ref}>
        <p className="section-eyebrow section-eyebrow--light">Let&apos;s Talk</p>
        <h2 className="contact-title">Got an idea? Let&apos;s build it together.</h2>
        <p className="contact-body">
          I&apos;m currently open to freelance projects and full-time roles. Reach out and let&apos;s make
          something great.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary" ref={buttonRef}>
          Say Hello
        </a>
        <div className="contact-social">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="contact-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS[label]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
