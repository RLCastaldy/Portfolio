const styles = {
    heading: {
      background: 'Red'
    },
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function Content() {
    return (
      <header style={styles.heading} className="header">
      <h1 style={styles.h1}>Aspiring Developer</h1>
    </header>
    );
  }
  
  export default Content;