import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import ResumeModal from "./ResumeModal";

const techStack = [
  { name: "React", icon: <FaReact className="text-info" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-danger" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-primary" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="home-section text-white" id="home">
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6">
            <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm Navanesh Kanth
            </motion.h1>
            <motion.h4
              className="mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Frontend Web Developer (React.js)
            </motion.h4>
            <div className="mb-4">
              <span className="badge bg-warning text-dark me-2">📍 Dubai</span>
              <span className="badge bg-light text-dark">3+ Years Experience</span>
            </div>
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I craft modern, responsive UIs and integrate seamless backend APIs.
              Passionate about user-first design and scalable apps.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="d-inline-block"
            >
              <Link to="/contact" className="btn btn-warning px-5 py-2 fw-semibold shadow-lg">
                🚀 Hire Me
              </Link>
            </motion.div>
          </div>

          {/* Resume Viewer Section */}
          {/* <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="resume-box p-4 rounded-4 text-center"
            >
              <h5 className="mb-3">Quick Resume Preview</h5>
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-warning fw-bold"
              >
                View Resume
              </motion.button>
              <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
            </motion.div>
          </div> */}
          {/* Resume Download Button Section */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <motion.a
              href="/NavaneshKanth_FrontendDeveloper_2025.pdf"
              download
              whileHover={{ scale: 1.1, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-gradient px-5 py-3 fw-semibold shadow-lg rounded-pill"
            >
              ⬇️ Download Resume
            </motion.a>
          </div>

        </div>

        {/* Tech Stack */}
        <motion.div
          className="tech-stack d-flex justify-content-center flex-wrap gap-4 mt-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-icon d-flex flex-column align-items-center text-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="display-5">{tech.icon}</div>
              <small>{tech.name}</small>
            </motion.div>
          ))}
        </motion.div>

        {/* About Preview */}
        <div className="about-preview mt-5 text-center">
          <h5>About Me</h5>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            React developer based in Dubai with strong skills in UI/UX, REST APIs, and scalable component architecture.
            I turn ideas into real-world apps.
          </p>
          <Link to="/about" className="btn btn-outline-light mt-2">Know More</Link>
        </div>

        {/* Stats */}
        <div className="stats d-flex justify-content-center gap-5 mt-5 flex-wrap">
          {[{ label: "Projects", end: 10 }, { label: "Skills", end: 12 }, { label: "Years Experience", end: 3 }].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <h2><CountUp end={stat.end} />+</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-5 text-center">
          <h5>Want to collaborate on your next project?</h5>
          <Link to="/contact" className="btn btn-warning mt-2">Let’s Connect</Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
.home-section {
  min-height: 100vh;
  padding-top: 7rem;
  background: 
    url('/section.svg') no-repeat center center / cover,
    linear-gradient(135deg, #1a2a6c, #185a9d, #43cea2);
}






        .resume-box {
          background: linear-gradient(145deg, #1c1c1c, #2c2c2c);
          color: white;
          min-width: 280px;
        }

        .tech-icon {
          width: 90px;
          height: 90px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 1rem;
          transition: transform 0.3s ease;
        }

        .tech-icon:hover {
          transform: scale(1.1);
          background-color: rgba(255, 255, 255, 0.1);
        }
          .btn-gradient {
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: black;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #ffca28, #ffb300);
  box-shadow: 0 0 12px rgba(255, 193, 7, 0.6);
}

      `}</style>
    </section>
  );
};

export default Home;
