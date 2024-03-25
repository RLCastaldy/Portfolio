import '../styles/Footer.css';

const styles = {
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footLinks: {
    marginLeft: '25px',
  }
};
  
  function Footer() {
    return (
      <header className="footer">
        <a href="https://github.com/RLCastaldy" style={styles.footer} className='footer'>GitHub</a>
        <a href="https://www.linkedin.com/in/richard-castaldy-0b5b732bb/" style={styles.footLinks} className='footLinks'>LinkedIn</a>
    </header>
    );
  }
  
  export default Footer;