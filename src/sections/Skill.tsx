import React from 'react';
import SkillIcons from '../SkillIcons';

interface SkillsSectionProps {
  skillsToShow: string[];
}

const Skill: React.FC<SkillsSectionProps> = ({ skillsToShow }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <SkillIcons skillsToShow={skillsToShow} />
      <p>Proficient in HTML5, CSS3, JavaScript, React, Java, Python, Git, and more.</p>
    </section>
  );
}

export default Skill;

