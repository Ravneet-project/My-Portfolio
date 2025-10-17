import React from "react";
import { Link } from "react-router-dom"; // 👈 added
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <section className="home d-flex align-items-center justify-content-center text-center bg-dark text-light" style={{ minHeight: "100vh" }}>
      <div className="container">
        <h1 className="fw-bold mb-3">
          Hi, I’m <span className="text-primary">Ravneet Sawhney</span>
        </h1>
        <h4 className="text-light mb-4">
          Web Developer | React Enthusiast | Creative Coder
        </h4>
        <p className="lead text-white-50 mb-5">
          I love building clean, interactive, and user-friendly web applications
          using React, Node.js, and MongoDB.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/projects" className="btn btn-primary px-4 py-2">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-outline-light px-4 py-2">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
