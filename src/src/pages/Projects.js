import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import academiccompaints from "../assets/academic-complaints.JPG";
import helpingDonation from "../assets/helping-donation.JPG";


const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>

        <div className="project-container">
          {/* === Project 1: Academic Complaints === */}
               <div className="project-card">
            <div className="project-img">
              <img
                src={academiccompaints}
                alt="Academic complaints"
              />
            </div>
            
            <div className="icon-box">
              <i className="bi bi-laptop"></i>
            </div>
            <h4>Academic Complaints Portal</h4>
            <p>
              A full-stack web app that allows students to submit, track, and
              resolve academic issues with ease. Built using{" "}
              <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, and <strong>MongoDB</strong>. Features
              include secure login, real-time complaint tracking, and responsive
              design.
            </p>
            <a
              href="https://academic-complaints-fr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info mt-3"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i> View Project
            </a>
          </div>

          {/* === Project 2: Helping Donation === */}
          <div className="project-card">
            <div className="project-img">
              <img
                src={helpingDonation}
                alt="Helping Donation Project"
              />
            </div>
            <div className="icon-box">
              <i className="bi bi-heart-fill"></i>
            </div>
            <h4>Helping Hands (Donation Platform)</h4>
            <p>
              A donation-based platform connecting donors with those in need.
              Developed with <strong>Core PHP</strong> and{" "}
              <strong>MySQL</strong>, ensuring secure data handling and a
              user-friendly, responsive interface. Focused on helping society by
              bridging the gap between donors and recipients.
            </p>
            <a
              href="#"
              className="btn btn-outline-info mt-3 disabled"
              title="Coming Soon"
            >
              <i className="bi bi-clock-history me-2"></i> Coming Soon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
