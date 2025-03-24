import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Hermtechs</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Build and Innovate with AI, Web, Mobile, & Cybersecurity</h1>
          <p>
            I’m a software developer specializing in cutting-edge technologies.
            Let’s collaborate to bring your ideas to life.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/97470923424?text=Hello%20there%2C%20I%20am%20here%20from%20your%20portfolio%20site"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
            <a href="https://github.com/hermtechs" className="cta-secondary">
              View GitHub
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Passionate about AI, full-stack web development, mobile apps, and
          cybersecurity. I thrive on creating robust solutions that combine
          performance, security, and innovation.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <strong>AI Development:</strong> Machine Learning, Deep Learning,
            NLP
          </li>
          <li>
            <strong>Web Development:</strong> React, Node.js, Express, REST APIs
          </li>
          <li>
            <strong>Mobile Development:</strong> React Native, Android, iOS
          </li>
          <li>
            <strong>Cybersecurity:</strong> Secure Coding, Pen Testing, Risk
            Assessment
          </li>
        </ul>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>
          Check out my GitHub for open-source and personal projects, or explore
          some highlights below.
        </p>
        <div className="project-cards">
          <div className="project-card">
            <h3>AI Chatbot</h3>
            <p>A conversational AI chatbot built with Node.js and GPT APIs.</p>
          </div>
          <div className="project-card">
            <h3>Mobile E-Commerce App</h3>
            <p>
              A React Native e-commerce solution with secure payment
              integration.
            </p>
          </div>
          <div className="project-card">
            <h3>Cybersecurity Toolkit</h3>
            <p>
              A toolkit for vulnerability scanning and automated penetration
              testing.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>
          Ready to collaborate or have questions?
          <br />
          <strong>Email:</strong>{" "}
          <a href="mail-to:hermtechs@gmail.com">hermtechs@gmail.com</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Hermtechs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
