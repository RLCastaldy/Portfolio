import './Project.css';

const styles = {
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function Project() {
    return (
      <header className="heading">
      <h1 style={styles.h1}>Aspiring Developer</h1>
    </header>
    );
  }
  
  export default Project;