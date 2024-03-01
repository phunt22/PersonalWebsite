import React from 'react';
import ProjectCard from '../components/ProjectCard';

interface ProjectSectionProps {
  projects: {
    image: string;
    imageAltText: string;
    title: string;
    description: string;
    learnMoreURL?: string;
  }[];
}

const Project: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <div className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            imageAltText={project.imageAltText}
            title={project.title}
            description={project.description}
            learnMoreURL={project.learnMoreURL}
          />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Project;
