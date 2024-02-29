import ProjectCard from '../components/ProjectCard'
import project1Thumbnail from '../assets/project1-thumbnail.png';
import project2Thumbnail from '../assets/project2-thumbnail.png';

function Project() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectCard
          image={project1Thumbnail}
          imageAltText="A resume webpage that has a green header and black background with rainbow colored connected nodes."
          title="Project 1"
          description="Add project description here."
          learnMoreURL="https://leejmorel.github.io/#/"
        />
        <ProjectCard
          image={project2Thumbnail}
          imageAltText="An application welcome screen of the software PathKit"
          title="Project 2"
          description="Add project description here."
        />
      </div>
    </section>
  );
}

export default Project;