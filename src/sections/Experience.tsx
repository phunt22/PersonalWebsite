function Experience() {
    return (
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-wrapper">
          <div className="experience-item">
            <h3>Software Development Intern</h3>
            <p className="experience-date">May 2022 - August 2022</p>
            <p className="experience-company">ABC Tech Solutions, New York, NY</p>
            <ul className="experience-highlights">
              <li>Collaborated with a team of developers to create and implement new features for the company's web application.</li>
              <li>Assisted in debugging and troubleshooting issues in existing codebase.</li>
              <li>Participated in code reviews and provided feedback on colleagues' code.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Computer Science Tutor</h3>
            <p className="experience-date">September 2021 - Present</p>
            <p className="experience-company">XYZ University, Department of Computer Science, City, ST</p>
            <ul className="experience-highlights">
              <li>Provided one-on-one tutoring to undergraduate students in computer science courses.</li>
              <li>Assisted students with understanding programming concepts and assignments in languages such as Java, Python, and C++.</li>
              <li>Developed and conducted workshops on data structures and algorithms.</li>
            </ul>
          </div>
          {/* Add more experience items as needed */}
        </div>
      </section>
    );
  }
  
  export default Experience;