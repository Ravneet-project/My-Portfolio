import React from "react";
import "./Certifications.css";

// Import logos
import UnstopLogo from "../assets/unstop.png";
import HpLifeLogo from "../assets/hplife.png";
import ForageLogo from "../assets/forage.png";
import CourseraLogo from "../assets/coursera.png";
import O7Logo from "../assets/o7.png";

// Certifications data
const certifications = [
  {
    title: "Certificate of Excellence in Daily Quiz – Management: October Series",
    platform: "Unstop",
    issued: "Oct 2025",
    credentialId: "61644519-cd03-4cf0-bbf2-ff01825dd457",
    logo: UnstopLogo,
    certificateImage: require("../assets/cert_unstop_quiz.JPG")
  },
  {
    title: "Certificate of Completion – Interview Toolkit",
    platform: "Unstop",
    issued: "Aug 2025",
    credentialId: "f5c95d99-2b19-4f04-9a74-77cd6ea8876d",
    logo: UnstopLogo,
    certificateImage: require("../assets/cert_interview_toolkit.jpeg")
  },
  {
    title: "Data Science & Analytics",
    platform: "HP LIFE",
    issued: "Jul 2025",
    credentialId: "df15f248-ea97-4b6f-a2b2-7fff13bc1445",
    skills: "Data Science",
    logo: HpLifeLogo,
    certificateImage: require("../assets/cert_hplife.jpeg")
  },
  {
    title: "Tata – Cybersecurity Analyst Job Simulation",
    platform: "Forage",
    issued: "Jul 2025",
    credentialId: "fwugmRwjEnZpxDheF",
    logo: ForageLogo,
    certificateImage: require("../assets/cert_forage_cyber.JPG")
  },
  {
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    platform: "Forage",
    issued: "Jul 2025",
    credentialId: "mwbTLrsoezMX8pmnR",
    logo: ForageLogo,
    certificateImage: require("../assets/cert_forage_genai.JPG")
  },
  {
    title: "Crash Course on Python",
    platform: "Coursera",
    issued: "May 2023",
    credentialId: "FBPNQH3R3CF8",
    link: "https://www.coursera.org/account/accomplishments/verify/FBPNQH3R3CF8",
    logo: CourseraLogo,
    certificateImage: require("../assets/cert_coursera_python.JPG")
  }
];

// Trainings data
const trainings = [
  {
    title: "MERN Stack Development",
    platform: "O7 Services IT Company",
    issued: "Aug 2024",
    expired: "Dec 2024",
    skills: "React.js",
    logo: O7Logo
  },
  {
    title: "Core PHP",
    platform: "O7 Services IT Company",
    logo: O7Logo
  }
];

const TrainingCertificate = () => {
  return (
    <div className="certifications-container">
      {/* Certifications Section */}
      <h2>🎓 Certifications</h2>
      <div className="card-container">
        {certifications.map((cert, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={cert.logo} alt={cert.platform} className="platform-logo" />
              <h3>{cert.title}</h3>
            </div>
            <p><strong>Platform:</strong> {cert.platform}</p>
            <p><strong>Issued:</strong> {cert.issued}</p>
            {cert.skills && <p><strong>Skills:</strong> {cert.skills}</p>}
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noreferrer">View Credential</a>
            ) : (
              <p><strong>Credential ID:</strong> {cert.credentialId}</p>
            )}

            {/* Certificate Thumbnail */}
            {cert.certificateImage && (
              <div className="certificate-image-container">
                <a href={cert.certificateImage} target="_blank" rel="noreferrer">
                  <img
                    src={cert.certificateImage}
                    alt={`${cert.title} certificate`}
                    className="certificate-thumbnail"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trainings Section */}
      <h2>🛠️ Trainings</h2>
      <div className="card-container">
        {trainings.map((train, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={train.logo} alt={train.platform} className="platform-logo" />
              <h3>{train.title}</h3>
            </div>
            <p><strong>Platform:</strong> {train.platform}</p>
            {train.issued && <p><strong>Issued:</strong> {train.issued}</p>}
            {train.expired && <p><strong>Expired:</strong> {train.expired}</p>}
            {train.skills && <p><strong>Skills:</strong> {train.skills}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCertificate;
