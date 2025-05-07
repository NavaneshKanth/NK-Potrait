import React from "react";
import { FaReact, FaNodeJs, FaJsSquare, FaBootstrap } from "react-icons/fa"; // React Icons for skill icons
import "../css/Skills.css"; 

export default function Skills() {
  return (
    <div className="skills-page">
      <section className="skills-header">
        <h1>My Skills</h1>
        <p>Here's a showcase of my technical skills and proficiency.</p>
      </section>

      <section className="skills-list">
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>React.js</h3>
          <p>Building dynamic and user-friendly interfaces with React.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <h3>Node.js</h3>
          <p>Backend development with Node.js and Express.js.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="skill-card">
          <FaJsSquare className="skill-icon" />
          <h3>JavaScript</h3>
          <p>Advanced JavaScript concepts and functional programming.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="skill-card">
          <FaBootstrap className="skill-icon" />
          <h3>Bootstrap</h3>
          <p>Creating responsive, mobile-first websites with Bootstrap.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
