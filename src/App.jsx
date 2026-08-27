import React from 'react';
import './App.css';
import profilePhoto from './profile.jpg';

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">My Portfolio</h1>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container home-container">

          <div className="profile-image-box">
            <img
              src={profilePhoto}
              alt="Sam Branham Christopher"
              className="profile-photo"
            />
          </div>

          <div className="home-text">
            <h1 className="name">
              Hello!!, I'm <strong>Sam Branham Christopher I</strong>
            </h1>

            <h2 className="title">
              B.Tech Artificial Intelligence & Data Science Student
            </h2>

            <h3 className="college">
              Rathinam Technical Campus
            </h3>

            <p className="intro">
              A fresher student at <strong>Rathinam Technical Campus</strong>,
              currently pursuing <strong>B.Tech Artificial Intelligence and
              Data Science</strong>. Interested in software development,
              learning new skills and building projects.
            </p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container">

          <h2 className="section-title">About Me</h2>

          <div className="card about-card">
            <p>
              I am interested in software development and enjoy learning new
              skills and building projects. I have also received medals and
              awards in hackathons for agriculture-related projects.
            </p>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">

          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">

            <div className="card skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>React Router</li>
                <li>Material UI</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h3>Programming</h3>
              <ul>
                <li>Python (Learning)</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h3>Tools & Development</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Responsive Web Design</li>
                <li>REST API Basics</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h3>AI & Data Science</h3>
              <ul>
                <li>Python for Data Science</li>
                <li>NumPy</li>
                <li>Data Visualization</li>
                <li>Machine Learning Fundamentals</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-light">
        <div className="container">

          <h2 className="section-title">Education</h2>

          <div className="education-list">

            <div className="card education-card">
              <h3>10th Standard</h3>
              <h4>Bishop Francis Matriculation School</h4>
              <p className="location">
                N.G.G.O Colony, Coimbatore
              </p>
              <span className="marks-tag">
                SSLC Examination: 96.4%
              </span>
            </div>

            <div className="card education-card">
              <h3>11th and 12th Standard</h3>
              <h4>
                Sri Ramakrishna Matriculation Higher Secondary School
              </h4>
              <p className="location">
                Vattamalaipalayam, Coimbatore
              </p>
              <span className="marks-tag">
                HSC +2 Examination: 85.5%
              </span>
            </div>

            <div className="card education-card">
              <h3>Under Graduation</h3>
              <h4>Rathinam Technical Campus</h4>
              <p className="degree">
                B.Tech Artificial Intelligence and Data Science
              </p>
              <span className="status-tag">
                Currently Pursuing
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">

          <h2 className="section-title">Achievements</h2>

          <div className="achievements-grid">

            <div className="card achievement-card">
              <h3>
                1. Meritorious and Student of the Year 2026 School Awards
              </h3>
              <p>
                Received Meritorious and Student of the Year 2026 school
                awards from KGiSL College.
              </p>
            </div>

            <div className="card achievement-card">
              <h3>2. Innov8 Challenge</h3>
              <p>
                Received an Innov8 Challenge award conducted at the national
                level on 08.11.2024 for a project related to Agriculture and
                Rural Development.
              </p>
            </div>

            <div className="card achievement-card">
              <h3>3. Trinity College London Keyboard Examination</h3>
              <p>
                Completed the keyboard examination conducted by Trinity
                College London and secured 93/100.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container">

          <h2 className="section-title">Contact</h2>

          <div className="card contact-card">

            <h3 className="contact-name">
              Sam Branham Christopher I
            </h3>

            <div className="contact-info">

              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:sambranhamchristopher@gmail.com">
                  sambranhamchristopher@gmail.com
                </a>
              </p>

              <p>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/sambc31"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sambc31
                </a>
              </p>

              <p>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/sam-branham-christopher-i-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sam-branham-christopher-i-
                </a>
              </p>

              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919789358734">
                  +91 9789358734
                </a>
              </p>

              <p>
                <strong>Location:</strong>{' '}
                <span className="address">
                  Coimbatore, Tamil Nadu
                </span>
              </p>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;