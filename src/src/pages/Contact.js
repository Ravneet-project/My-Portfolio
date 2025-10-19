import React, { useState } from "react";


const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = () => {
    setShowPhone(true);
  };

  return (
    <section className="contact-section d-flex align-items-center justify-content-center text-center">
      <div className="contact-card">
        <h1 className="contact-title mb-4">Get in Touch</h1>
        <p className="contact-subtitle mb-4">
          I’d love to connect! You can reach out to me through the options below.
        </p>

        {/* Call Me Button */}
        {!showPhone ? (
          <button className="btn phone-btn mb-3" onClick={handlePhoneClick}>
            Call Me
          </button>
        ) : (
          <a href="tel:6283441364" className="btn phone-btn mb-3">
            📞 6283441364
          </a>
        )}

        <div className="d-flex justify-content-center gap-3 mt-4">
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
    </section>
  );
};

export default Contact;
