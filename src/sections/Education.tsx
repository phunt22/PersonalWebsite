interface EducationProps {
  educationEntries: {
    degree: string;
    institution: string;
    graduationDate: string;
    institutionLink?: string;
  }[];
}

function Education({ educationEntries }: EducationProps) {
  return (
    <section id="education">
      <div className="section">
      <h2>Education</h2>
      {educationEntries.map((education, index) => (
        <div className="education-item" key={index}>
          <p>
            {education.degree}, {education.institutionLink ? (
              <a
                href={education.institutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="education-institution-link"
              >
                {education.institution}
              </a>
            ) : (
              education.institution
            )}
          </p>
          <p>Graduation Date: {education.graduationDate}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Education;
