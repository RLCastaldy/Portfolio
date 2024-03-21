const styles = {
    heading: {
      background: 'Red'
    },
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function Footer() {
    return (
      <header style={styles.heading} className="header">
      <h1 style={styles.h1}>Hire Me!!</h1>
    </header>
    );
  }
  
  export default Footer;