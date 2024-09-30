import React from "react";
import './Portfolio.css'; // Import the CSS file for styles

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <section className="introduction-section">
        <h1 className="portfolio-title">👋 Hello, I'm Cusherah Kugananthan!</h1>
        <h2 className="portfolio-subtitle">🌟 Full Stack Developer</h2>
        <p className="portfolio-description">
          As a dedicated and results-driven Full Stack Developer from Colombo, Sri Lanka, I specialize in Java, JavaScript, React.js, and Spring Boot. I am passionate about delivering high-quality web applications and software solutions. With a keen focus on user experience, I am constantly enhancing my skills and staying up-to-date with the latest technologies.
        </p>
      </section>

      <section className="skills-section">
        <h3 className="skills-title">🛠️ Experienced With</h3>
        <div className="skills-container">
          {[
            "java", "js", "php", "c", "mysql", "html", "css", "nodejs",
            "react", "spring", "tailwind", "mui", "bootstrap", "aws", "git",
            "github", "vscode", "idea", "figma", "postman", "r", "jira", "trello"
          ].map((icon) => (
            <img
              key={icon}
              src={`https://skillicons.dev/icons?i=${icon}&size=64`}
              className="skill-icon"
              alt={icon.charAt(0).toUpperCase() + icon.slice(1)}
            />
          ))}
        </div>
      </section>

      <section className="about-me-section">
        <h3 className="about-title">💼 About Me</h3>
        <p className="about-description">
          I am a Full Stack Developer, UI/UX Engineer, Project Manager, and Quality Assurance Specialist with a strong focus on professional development and teamwork. I am committed to delivering innovative solutions that drive value. I enjoy working in collaborative environments and am always open to learning new skills and techniques to enhance my work.
        </p>
      </section>

      <section className="projects-section">
        <h3 className="projects-title">📂 My Projects</h3>
        <div className="projects-container">
          {[
            {
              title: "Project 1",
              description: "A web application built using React and Node.js.",
              imageUrl: "https://via.placeholder.com/300",
            },
            {
              title: "Project 2",
              description: "An e-commerce platform developed with Spring Boot.",
              imageUrl: "https://via.placeholder.com/300",
            },
            {
              title: "Project 3",
              description: "A mobile app created with React Native.",
              imageUrl: "https://via.placeholder.com/300",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="connect-section">
        <h3 className="connect-title">🌐 Connect with Me</h3>
        <div className="connect-container">
          <a href="https://www.linkedin.com/in/cusherah-kugan-9a9382315/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:cusherahkugan@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" className="social-icon" />
          </a>
          <a href="https://github.com/Cusherah" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Git" className="social-icon" />
          </a>
        </div>
      </section>

      <section className="reach-out-section">
        <h3 className="reach-out-title">📫 Reach Out</h3>
        <p className="reach-out-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
