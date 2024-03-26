import resumeFile from '../assets/RC.pdf'; // Import the resume file

import '../styles/Resume.css';

  
function Resume() {
  return (
    <header className="Resume">
      <a href={resumeFile} download="RC.pdf">Download Resume</a>
      <h2 className="">Technologies:</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>Node</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Various NPM packages</li>
        <li>React</li>
        <li>Express</li>
        <li>APIs</li>
    </header>
  );
}
  
  export default Resume;