import React from 'react';

function About() {
  return (
    <div className="about-container flex flex-col lg:flex-row items-center justify-between p-8 text-white">
      <div className="text-section lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I'm Cusherah Kuagnanthan, a passionate software developer with experience in full-stack development.
          I love creating dynamic and user-friendly web applications. My journey in the tech world has been 
          driven by curiosity and a deep passion for solving problems through code.
        </p>
        <p className="mb-4">
          I have worked on various projects involving modern web technologies like React, Node.js, and Tailwind CSS.
          My goal is to continually grow as a developer and contribute to impactful projects that make a difference.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="image-section lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img  alt="Cusherah Kuagnanthan" className="rounded-full w-1/2 border-4 border-gray-700" />
        <img  alt="Illustration" className="w-1/2" />
      </div>
    </div>
  );
}

export default About;
