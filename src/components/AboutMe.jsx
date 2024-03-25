import '../styles/Project.css';

const styles = {
    h1: {
      fontSize: '30px'
    }
  
  }
  
  function AboutMe() {
    return (
      <header className="project">
      <h1 style={styles.h1}>I am an aspiring developer hoping to break into the professional world of web development. I am eager to get started with a company so I can continue building on the core concepts we learned in bootcamp. I am familiar with working on front end technologies such as HTML, CSS, and JS. I also have some experience working with MySQL, MongoDB, and various NPM packages. I can create a restful API and make calls to it with Node JS. I am capable of creating routes to retrieve, post, and delete data as well as test them in Insomnia.</h1>
    </header>
    );
  }
  
  export default AboutMe;