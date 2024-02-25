import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import accentSVG from '../assets/accent.svg';

function About() {
    return (
        <section id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>I am an undergraduate student majoring in Computer Science at XYZ University. Passionate about software development and eager to learn new technologies.</p>
            {/* Social media buttons */}
            <div className="about-icons">
              <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} aria-label="GitHub profile" className="about-icon"/>
                <span className="sr-only">{"Github"}</span>
              </a>
              <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn profile" className="about-icon" />
                <span className="sr-only">{"LinkedIn"}</span>
              </a>
            </div>
          </div>
          <div className="decorative-svg">
            {/* Insert your decorative image here */}
            <img src={accentSVG} alt="6 tropical leaves with pink and green colors" />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;