// Import CSS and assets
import './App.css';
import profilePic from './assets/profile-pic.jpg';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Skill from './sections/Skill';

function App() {
  const yourName = "MayTrix"; // TODO: Replace with your name
  
  // TODO: Update the skills list with your own
  const skillsToShow = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Java', 'Python', 'Git']; // Example skills

  return (
    <div className="app">
      {/* Header section */}
      <header>
        <div className="header-row">
          <div className="profile-info">

            {/* TODO: Replace profile picture with your own */}
            <img src={profilePic} alt="A picture of a person with short spiky rainbow hair" className="profile-pic" />

            <h1>{yourName}</h1>
          </div>
          <div>
            {/* TODO: Replace with your own resume file */}
            <a href="/Resume.pdf" download="Resume.pdf">
              <button className="download-button">Download Resume</button>
            </a>
          </div>
        </div>

        <nav>
          <ul>
            {/* Navigation links */}
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </header>

      <main>
        {/* TODO: Customize the content of each section */}
        <About/>
        <Experience/>
        <Education/>
        <Skill skillsToShow={skillsToShow}/>
        <Project/>
        <Contact/>
      </main>

      <footer>
        <p>&copy; 2024 {yourName} | <a href="https://leejmorel.github.io/#/">Designed by Lee J Morel</a></p>
      </footer>
    </div>
  );
}

export default App;

