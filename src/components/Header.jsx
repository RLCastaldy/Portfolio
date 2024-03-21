const styles = {
  heading: {
    background: 'Red'
  },
  h1: {
    fontSize: '100px'
  }

}

function Header() {
  return (
    <header style={styles.heading} className="header">
    <h1 style={styles.h1}>Richard Castaldy</h1>
  </header>
  );
}

export default Header;