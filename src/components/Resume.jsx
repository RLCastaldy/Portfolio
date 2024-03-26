import '../styles/Resume.css';
  
function Resume() {
  const resumeFile = '/path/to/your/resume.pdf'; // Update the path to your resume file

  return (
    <header className="Resume">
      <a href={resumeFile} download="YourResume.pdf">Download Resume</a>
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