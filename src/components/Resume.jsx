import '../styles/Project.css';

const styles = {
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function Resume() {
    return (
      <header className="project">
      <h1 style={styles.h1}>Resume</h1>
    </header>
    );
  }
  
  export default Resume;