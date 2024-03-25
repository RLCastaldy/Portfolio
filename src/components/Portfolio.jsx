import '../styles/Project.css';

const styles = {
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function Portfolio() {
    return (
      <header className="project">
      <h1 style={styles.h1}>Portfolio</h1>
    </header>
    );
  }
  
  export default Portfolio;