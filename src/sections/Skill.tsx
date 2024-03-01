import React from 'react';
import SkillIcons from '../components/SkillIcons';

interface SkillsSectionProps {
  skillsToShow: string[];
  nonTechSkills?: string[];
}

const Skills: React.FC<SkillsSectionProps> = ({ skillsToShow, nonTechSkills }) => {
  const separator = ' • '; // You can customize the separator

  return (
    <section id="skills">
      <div className="section">
      <h2>Skills</h2>
      {/* 
        Hide decorative icons from screen readers.
        These icons are purely decorative and do not convey meaningful information to users relying on screen readers.
      */}
      <div aria-hidden={true}>
        <SkillIcons skillsToShow={skillsToShow} />
      </div>
      {nonTechSkills && nonTechSkills.length > 0 && (
        <div>
          <p>{[...skillsToShow, ...nonTechSkills].join(separator)}</p>
        </div>
      )}
      </div>
    </section>
  );
}

export default Skills;
