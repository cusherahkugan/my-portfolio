import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "FarmToKeells",
    description: "Developed an online platform for local farmers to sell produce directly to consumers.",
    link: "https://github.com/cusherahkugan/FarmToKeells"
  },
  {
    title: "Eventix",
    description: "An event management system with features for organizing and managing events.",
    link: "https://github.com/cusherahkugan/Eventix"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="p-6 bg-purple-700 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
