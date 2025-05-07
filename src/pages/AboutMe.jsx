import React from "react";
import { FaReact, FaNodeJs, FaJava, FaLaptopCode } from "react-icons/fa"; // React Icons for about section
import '../css/About.css';
export default function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Here's a little about who I am and what I do.</p>
      </section>

      <section className="about-info">
        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Frontend Developer</h3>
          <p>
            With 3+ years of experience in building dynamic web applications, I
            specialize in creating interactive and responsive user interfaces.
          </p>
        </div>

        <div className="about-card">
          <FaNodeJs className="about-icon" />
          <h3>Backend Developer</h3>
          <p>
            Skilled in developing scalable backend solutions using Node.js and
            Express.js to create robust APIs.
          </p>
        </div>

        <div className="about-card">
          <FaReact className="about-icon" />
          <h3>React.js Enthusiast</h3>
          <p>
            Passionate about building fast, efficient, and dynamic front-end
            applications using React.js.
          </p>
        </div>

        <div className="about-card">
          <FaJava className="about-icon" />
          <h3>Java</h3>
          <p>
            Basic knowledge of Java for developing backend services and web
            applications.
          </p>
        </div>
      </section>

      <section className="about-achievements">
        <h2>My Achievements</h2>
        <div className="achievement">
          <h3>Completed Projects</h3>
          <p>7+ web applications developed and deployed successfully.</p>
        </div>
        <div className="achievement">
          <h3>Years of Experience</h3>
          <p>3+ years working with frontend and backend technologies.</p>
        </div>
      </section>
    </div>
  );
}
