import '../styles/Portfolio.css';
import quizImage from '../assets/quiz.png'
import movieImage from '../assets/movie.png'
import assistantImage from '../assets/assistant.png'
import scheduleImage from '../assets/schedule.png'
import passwordImage from '../assets/password.png'
import weatherImage from '../assets/weather.png'

function Portfolio() {
  return (
    <header className="portfolio">

      <div className="projectContainer">
        <img src={quizImage} alt="Quiz" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://rlcastaldy.github.io/Quiz/" className='portLinks'>Quiz App</a><br></br>
          <a href="https://github.com/RLCastaldy/Quiz" className='portLinks'>Quiz Repo</a>
        </div>
      </div>

      <div className="projectContainer">
        <img src={movieImage} alt="Movie" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://rlcastaldy.github.io/MovieReviewFinder/" className='portLinks'>Movie Review Finder App</a><br></br>
          <a href="https://github.com/RLCastaldy/MovieReviewFinder" className='portLinks'>Movie Review Finder Repo</a>
        </div>
      </div>

      <div className="projectContainer">
        <img src={assistantImage} alt="Assistant" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://personalassistant.onrender.com/" className='portLinks'>Personal Assistant App</a><br></br>
          <a href="https://github.com/RLCastaldy/PersonalAssistant" className='portLinks'>Personal Assistant Repo</a>
        </div>
      </div>

      <div className="projectContainer">
        <img src={scheduleImage} alt="Schedule" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://rlcastaldy.github.io/DailyWorkCalendar/" className='portLinks'>Work Day Scheduler App</a><br></br>
          <a href="https://github.com/RLCastaldy/DailyWorkCalendar" className='portLinks'>Work Day Scheduler Repo</a>
        </div>
      </div>

      <div className="projectContainer">
        <img src={passwordImage} alt="Password" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://rlcastaldy.github.io/Password-Generator/" className='portLinks'>Password Generator App</a><br></br>
          <a href="https://github.com/RLCastaldy/Password-Generator" className='portLinks'>Password Generator Repo</a>
        </div>
      </div>

      <div className="projectContainer">
        <img src={weatherImage} alt="Weather" className="portImage" /> {/* Display the profile image */}
        <div className="projectLinks">
          <a href="https://rlcastaldy.github.io/Weather-Forecast/" className='portLinks'>Weather Forecast App</a><br></br>
          <a href="https://github.com/RLCastaldy/Weather-Forecast" className='portLinks'>Weather Forecast Repo</a>
        </div>
      </div>
    </header>
  );
}

export default Portfolio