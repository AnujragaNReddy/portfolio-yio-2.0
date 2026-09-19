import { profile } from '../data/portfolioData';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name}. Crafted with React.
      </p>
      <a href="#hero" className="footer-top">
        Back to top ↑
      </a>
    </footer>
  );
}

export default Footer;
