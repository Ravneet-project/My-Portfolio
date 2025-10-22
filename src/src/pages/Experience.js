import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Experience = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="experience-section py-5" id="experience">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-light">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="row gy-4">
          {/* Experience 1 - MakeStudy */}
          <div className="col-md-6">
            <div className="experience-card shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-3">
                  <div className="exp-icon me-3">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-primary">Assistant Web Developer</h4>
                    <h6 className="text-light mb-0">
                      MakeStudy (Deepak) · Full-time
                    </h6>
                    <small className="text-secondary">
                      Sep 2025 - Present · Jalandhar, Punjab, India · On-site
                    </small>
                  </div>
                </div>

                <p className="text-light mb-2">
                  Working with <strong>PHP</strong> and its frameworks to build
                  and maintain dynamic web applications.
                </p>
                <ul className="text-light mb-3">
                  <li>
                    Developing responsive UIs using HTML, CSS, JavaScript, and
                    Bootstrap.
                  </li>
                  <li>Assisting in debugging and troubleshooting issues.</li>
                  <li>
                    Collaborating with the team to enhance performance and
                    optimize code.
                  </li>
                </ul>
              </div>

              <div className="d-flex gap-3 mt-auto">
                <button
                  className="btn btn-outline-info btn-sm"
                  onClick={() => openModal("/files/ms.jpeg")}
                >
                  <i className="bi bi-file-earmark-text me-1"></i> Offer Letter
                </button>
              </div>
            </div>
          </div>

          {/* Experience 2 - DC Info Tech */}
          <div className="col-md-6">
            <div className="experience-card shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-3">
                  <div className="exp-icon me-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-primary">MERN Stack Developer</h4>
                    <h6 className="text-light mb-0">
                      DC Info Tech Pvt Ltd · Internship
                    </h6>
                    <small className="text-secondary">
                      May 2025 - Jun 2025 · Mumbai, Maharashtra, India · Remote
                    </small>
                  </div>
                </div>

                <p className="text-light mb-2">
                  As a <strong>Web Developer Intern</strong> at DC InfoTech, I
                  designed, developed, and deployed full-stack web apps.
                </p>
                <ul className="text-light mb-3">
                  <li>Built responsive UIs with React.js & Bootstrap.</li>
                  <li>Developed backend APIs using Node.js & Express.js.</li>
                  <li>Integrated MongoDB for CRUD operations.</li>
                  <li>
                    Participated in code reviews and performance optimization.
                  </li>
                  <li>
                    Worked with Git, RESTful APIs & deployment workflows.
                  </li>
                </ul>
              </div>

              <div className="d-flex gap-3 mt-auto">
                <button
                  className="btn btn-outline-info btn-sm"
                  onClick={() => openModal("/files/ol-dc.jpg")}
                >
                  <i className="bi bi-file-earmark-text me-1"></i> Offer Letter
                </button>

                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => openModal("/files/dc.jpeg")}
                >
                  <i className="bi bi-award me-1"></i> Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Experience Document" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
