import '../styles/Header.css';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';


const styles = {
  myName: {
    fontWeight: 'bold',
    marginRight: 'auto',
    fontSize: '30px',
  },
  nav: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLink: {
    marginLeft: '25px',
  }
};


function Header() {
  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div>
      <nav style={styles.nav} className="navBar">
        <div>
          <p style={styles.myName} className="name">Richard Castaldy</p>
        </div>
        <a href="/" style={styles.navLink} className="navLinks" onClick={(e) => { e.preventDefault(); handleNavLinkClick('aboutMe'); }}>About Me</a>
        <a href="/" style={styles.navLink} className="navLinks" onClick={(e) => { e.preventDefault(); handleNavLinkClick('portfolio'); }}>Portfolio</a>
        <a href="/" style={styles.navLink} className="navLinks" onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}>Contact</a>
        <a href="/" style={styles.navLink} className="navLinks" onClick={(e) => { e.preventDefault(); handleNavLinkClick('resume'); }}>Resume</a>

      </nav>
      {activeSection === 'aboutMe' && <AboutMe />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
    </div>
  );
}

export default Header;