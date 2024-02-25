import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { 
    faBootstrap,
    faReact, 
    faAngular, 
    faVuejs,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faSass,
    faLess,
    faJs,
    faPython,
    faJava,
    faPhp,
    faSwift,
    faGit,
    faGithub,
    faGitlab,
    faDocker,
    faAws,
    faMicrosoft,
    faLinux,
    faApple,
    faWindows,
  // Add more icons as needed
} from '@fortawesome/free-brands-svg-icons';

interface SkillIconsProps {
  skillsToShow: string[];
}

interface Skill {
  name: string;
  icon: IconDefinition;
  websiteUrl: string;
}

const skillsMap: { [key: string]: Skill } = {
    React: {
      name: 'React',
      icon: faReact,
      websiteUrl: 'https://reactjs.org/',
    },
    Bootstrap: {
        name: 'Bootstrap',
        icon: faBootstrap,
        websiteUrl: 'https://getbootstrap.com/',
      },
    Angular: {
      name: 'Angular',
      icon: faAngular,
      websiteUrl: 'https://angular.io/',
    },
    Vue: {
      name: 'Vue.js',
      icon: faVuejs,
      websiteUrl: 'https://vuejs.org/',
    },
    NodeJS: {
      name: 'Node.js',
      icon: faNodeJs,
      websiteUrl: 'https://nodejs.org/',
    },
    HTML5: {
      name: 'HTML5',
      icon: faHtml5,
      websiteUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    },
    CSS3: {
      name: 'CSS3',
      icon: faCss3Alt,
      websiteUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    Sass: {
      name: 'Sass',
      icon: faSass,
      websiteUrl: 'https://sass-lang.com/',
    },
    Less: {
      name: 'Less',
      icon: faLess,
      websiteUrl: 'http://lesscss.org/',
    },
    JavaScript: {
      name: 'JavaScript',
      icon: faJs,
      websiteUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    Python: {
      name: 'Python',
      icon: faPython,
      websiteUrl: 'https://www.python.org/',
    },
    Java: {
      name: 'Java',
      icon: faJava,
      websiteUrl: 'https://www.java.com/',
    },
    PHP: {
      name: 'PHP',
      icon: faPhp,
      websiteUrl: 'https://www.php.net/',
    },
    Swift: {
      name: 'Swift',
      icon: faSwift,
      websiteUrl: 'https://developer.apple.com/swift/',
    },
    Git: {
      name: 'Git',
      icon: faGit,
      websiteUrl: 'https://git-scm.com/',
    },
    GitHub: {
      name: 'GitHub',
      icon: faGithub,
      websiteUrl: 'https://github.com/',
    },
    GitLab: {
      name: 'GitLab',
      icon: faGitlab,
      websiteUrl: 'https://about.gitlab.com/',
    },
    Docker: {
      name: 'Docker',
      icon: faDocker,
      websiteUrl: 'https://www.docker.com/',
    },
    AWS: {
      name: 'Amazon Web Services (AWS)',
      icon: faAws,
      websiteUrl: 'https://aws.amazon.com/',
    },
    Microsoft: {
      name: 'Microsoft',
      icon: faMicrosoft,
      websiteUrl: 'https://www.microsoft.com/',
    },
    Linux: {
      name: 'Linux',
      icon: faLinux,
      websiteUrl: 'https://www.linux.org/',
    },
    Apple: {
      name: 'Apple',
      icon: faApple,
      websiteUrl: 'https://www.apple.com/',
    },
    Windows: {
      name: 'Windows',
      icon: faWindows,
      websiteUrl: 'https://www.microsoft.com/en-us/windows',
    },
    // Add more skills as needed
  };

  const defaultIcon = faQuestionCircle; // Define a default icon for cases where the icon is not found

  const SkillIcons: React.FC<SkillIconsProps> = ({ skillsToShow }) => {
    const filteredSkills = skillsToShow
      .map(skillName => skillsMap[skillName]) // Retrieve skill from skillsMap
      .filter(Boolean); // Filter out undefined values
  
    return (
      <div className="skill-icons">
        {filteredSkills.map((skill, index) => (
          <a href={skill.websiteUrl} target="_blank" rel="noopener noreferrer" key={index} aria-label={skill.name}>
            <FontAwesomeIcon icon={skill.icon || defaultIcon} size="3x" className="skill-icon" />
            <span className="sr-only">{skill.name}</span>
          </a>
        ))}
      </div>
    );
  }
  
  export default SkillIcons;
