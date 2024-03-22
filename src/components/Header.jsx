import './Header.css';

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
}

function Header() {
  return (
    <nav style={styles.nav} className="navBar">
      <div>
        <p style={styles.myName} className="name">Richard Castaldy</p>
      </div>
      <a href="/" style= {styles.navLink} className="navLinks">About Me</a>
      <a href="/" style= {styles.navLink} className="navLinks">Portfolio</a>
      <a href="/" style= {styles.navLink} className="navLinks">Contact</a>
      <a href="/" style= {styles.navLink} className="navLinks">Resume</a>
    </nav>
  );
}

export default Header;