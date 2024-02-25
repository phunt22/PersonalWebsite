import project1Thumbnail from '../assets/project1-thumbnail.png';
import project2Thumbnail from '../assets/project2-thumbnail.png';

function Project() {
    return (
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project">
              <img src={project1Thumbnail} alt="A resume webpage that has a green header and black background with rainbow colored connected nodes." />
              <h3>Project 1</h3>
              <p>Add project description here.</p>
            </div>
            <div className="project">
              <img src={project2Thumbnail} alt="An application screen shot of the software PathKit." />
              <h3>Project 2</h3>
              <p>Add project description here.</p>
            </div>
          </div>
        </section>
    );
  }
  
  export default Project;