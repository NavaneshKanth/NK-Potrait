import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../css/Projects.css";

const projectList = [
  {
    title: "EDI Custom Clearance",
    description: "A web app for import/export clearance using API integrations.",
    link: "http://65.0.1.125:8080/ngpillai_import/#/login",
    status: "Live",
    tech: ["React", "Spring Boot"],
  },
  {
    title: "ERP System",
    description: "ERP system for business resource planning and automation.",
    link: "http://35.154.221.117:8081/ngp_erp/",
    status: "Live",
    tech: ["React", "Spring Boot"],
  },
  {
    title: "Matrimony Website",
    description: "Matrimony platform tailored for Tamil Nadu with profile matching and admin panel.",
    link: "#",
    status: "Live",
    tech: ["React JS", "Express.js"],
  },
  {
    title: "Blood Bank Web Application",
    description: "Web app to manage blood donors and requests efficiently with admin control.",
    link: "#",
    status: "Completed",
    tech: ["React", "Node.js"],
  },
  {
    title: "Advanced Billing Software",
    description: "Billing solution for small to mid-sized businesses with invoice and stock handling.",
    link: "#",
    status: "Completed",
    tech: ["React", "Express.js"],
  },
  {
    title: "Darkroom Photography Website",
    description: "Freelancing project for showcasing wedding and event photography portfolio.",
    link: "#",
    status: "Freelance",
    tech: ["React", "Firebase"],
  },
  {
    title: "Revive Musicals Billing Software",
    description: "Freelancing billing solution tailored for a musical instruments business.",
    link: "#",
    status: "Freelance",
    tech: ["React", "LocalStorage"],
  },
  {
    title: "Bear Electricals Billing Software",
    description: "Freelancing software designed for electrical retail billing and sales.",
    link: "#",
    status: "Freelance",
    tech: ["React", "Express.js"],
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">My Projects</h1>
      <p className="projects-subheading">
        Below are some of the key projects I’ve worked on.
      </p>

      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h5>{proj.title}</h5>
            <p className="project-desc">{proj.description}</p>

            <div className="project-tech">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <span
                className={`status ${
                  proj.status === "Live"
                    ? "live"
                    : proj.status === "Freelance"
                    ? "freelance"
                    : "progress"
                }`}
              >
                {proj.status}
              </span>
              {proj.link !== "#" && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
