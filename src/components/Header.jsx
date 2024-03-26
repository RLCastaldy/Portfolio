import '../styles/Header.css';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Header() {
  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div>
      <nav className="navBar">
        <div>
          <p className="name">Richard Castaldy</p>
          </div>
        <a href="/" className={`navLinks ${activeSection === 'aboutMe' ? 'activeLink' : ''}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick('aboutMe'); }}>About Me</a>
        <a href="/" className={`navLinks ${activeSection === 'portfolio' ? 'activeLink' : ''}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick('portfolio'); }}>Portfolio</a>
        <a href="/" className={`navLinks ${activeSection === 'contact' ? 'activeLink' : ''}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}>Contact</a>
        <a href="/" className={`navLinks ${activeSection === 'resume' ? 'activeLink' : ''}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick('resume'); }}>Resume</a>
      </nav>
      {activeSection === 'aboutMe' && <AboutMe />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
    </div>
  );
}

export default Header;