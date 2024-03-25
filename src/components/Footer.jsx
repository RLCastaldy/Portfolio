import '../styles/Footer.css';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  footLinks: {
    fontSize: '20px',
    marginLeft: '25px',
  }
};
  
  function Footer() {
    return (
      <header style={styles.footer} className="footer">
        <a href="https://github.com/RLCastaldy" style={styles.footLinks} className='footer'>GitHub</a>
        <a href="https://www.linkedin.com/in/richard-castaldy-0b5b732bb/" style={styles.footLinks} className='footLinks'>LinkedIn</a>
    </header>
    );
  }
  
  export default Footer;