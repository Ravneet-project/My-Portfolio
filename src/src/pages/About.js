import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>

        <div className="card-container">
          {/* --- About Card --- */}
          <div className="about-card">
            <div className="icon-box">
              <i className="bi bi-person-circle"></i>
            </div>
            <h4>Who I Am</h4>
            <p>
              I’m <strong>Ravneet Kaur</strong> — a passionate{" "}
              <strong>MERN Stack Developer</strong> from Jalandhar, Punjab.
              Motivated and enthusiastic about building modern web applications
              with a focus on responsive design and seamless user experience.
            </p>
            <p>
              My goal is to contribute to dynamic teams, continuously improve my
              coding skills, and develop impactful digital solutions using
              technologies like React.js, Node.js, and MongoDB.
            </p>
          </div>

          {/* --- Education Card --- */}
          <div className="about-card">
            <div className="icon-box">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <h4>Education</h4>
            <ul>
              <li>
                <i className="bi bi-journal-bookmark-fill me-2 text-info"></i>
                <strong>Master of Computer Applications</strong> — Lyallpur
                Khalsa College of Technical Campus (82%)
              </li>
              <li>
                <i className="bi bi-journal-bookmark-fill me-2 text-info"></i>
                <strong>Bachelor of Commerce</strong> — PCM SD College for Women
                (72%)
              </li>
              <li>
                <i className="bi bi-journal-check me-2 text-info"></i>
                <strong>12th Commerce</strong> — British Olivia School (88%)
              </li>
              <li>
                <i className="bi bi-journal-check me-2 text-info"></i>
                <strong>10th Standard</strong> — British Olivia School (10 CGPA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
