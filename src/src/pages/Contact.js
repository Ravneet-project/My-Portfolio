import React, { useState } from "react";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = () => {
    setShowPhone(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>

        {/* Show button or phone number */}
        {!showPhone ? (
          <button className="btn phone-btn" onClick={handlePhoneClick}>
            Call Me
          </button>
        ) : (
          <a href="tel:6283441364" className="btn phone-btn">
            📞 6283441364
          </a>
        )}

        <div className="buttons">
          <a
            href="https://github.com/Ravneet-project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn github-btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ravneet-kaur-aa2b332a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn linkedin-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
