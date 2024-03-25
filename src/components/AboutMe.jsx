import './Project.css';

const styles = {
    h1: {
      fontSize: '100px'
    }
  
  }
  
  function AboutMe() {
    return (
      <header className="project">
      <h1 style={styles.h1}>About Me</h1>
    </header>
    );
  }
  
  export default AboutMe;