import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      let current = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleLinkClick("hero")}
        >
          Nag<span className="navbar-brand-accent">.</span>
        </button>

        <nav className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
          {LINKS.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              className={`navbar-link ${activeId === id ? "navbar-link--active" : ""}`}
              onClick={() => handleLinkClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar-toggle ${isOpen ? "navbar-toggle--open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
