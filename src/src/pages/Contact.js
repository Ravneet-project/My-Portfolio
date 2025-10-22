import React from "react";


const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top Banner Section */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Hello.</h1>
          <p>Let's work together on your next project.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h3>For commissions and project inquiries, please email:</h3>
          <a href="mailto:ravneet.sawhney123@gmail.com" className="email-link">
           ravneet.sawhney123@gmail.com
          </a>
          <p>or send a message via this form</p>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/Ravneet-project"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ravneet-kaur-aa2b332a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="contact-right">
          <h3>Contact</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email *" required />
            <textarea placeholder="Write a message" rows="4"></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
