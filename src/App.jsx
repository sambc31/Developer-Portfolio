import React from 'react';
import './App.css';
import profilePhoto from './profile.jpg';

function App() {
  return (
    <div className="portfolio">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Developer Portfolio</h1>
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

      {/* 1. Home Section */}
      <section id="home" className="section home-section">
        <div className="container home-container">
          <div className="profile-image-box">
            <img 
              src={profilePhoto} 
              alt="Sam Branham Christopher I" 
              className="profile-photo"
            />
          </div>
          <div className="home-text">
            <h1 className="name">Sam Branham Christopher I</h1>
            <h2 className="title">B.Tech Artificial Intelligence & Data Science Student</h2>
            <h3 className="college">Rathinam Technical Campus</h3>
            <p className="intro">
              A fresher student at Rathinam Technical Campus, currently pursuing B.Tech Artificial Intelligence and Data Science. Interested in software development, learning new skills and building projects.
            </p>
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="section bg-light">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card about-card">
            <p>
              I am interested in software development and enjoy learning new skills and building projects. I have also received medals and awards in hackathons for agriculture-related projects.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="card skill-card">
              <h3><strong>Frontend</strong></h3>
              <div className="skills-subtitle">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>React Router</li>
                <li>Material UI</li>
              </ul>
              </div>
            </div>
            <div className="card skill-card">
              <h3><strong>Programming</strong></h3>
              <div className="skills-subtitle">
              <ul>
                <li>Python( Learning)</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
              </div>
            </div>
            <div className="card skill-card">
              <h3><strong>Tools & Development</strong></h3>
              <div className="skills-subtitle">
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Responsive Web Design</li>
                <li>REST API basics</li>
              </ul>
              </div>
            </div>
            <div className="card skill-card">
              <h3><strong>AI & Data Science</strong></h3>
              <div className="skills-subtitle">
              <ul>
                <li>Python for Data Science</li>
                <li>NumPy</li>
                <li>Data Visualization</li>
                <li>Machine Learning fundamentals</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Education Section */}
      <section id="education" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            
            {/* School - 10th */}
            <div className="card education-card">
              <h3>10th Standard :</h3>
              <h4>Bishop Francis Matriculation School</h4>
              <p className="location">N.G.G.O Colony, Coimbatore</p>
              <div className="marks-tag">SSLC Examination: 96.4 % </div>
            </div>

            {/* School - 11th & 12th */}
            <div className="card education-card">
              <h3>11th and 12th Standard :</h3>
              <h4>Sri Ramakrishna Matriculation Higher Secondary School</h4>
              <p className="location">Vattamalaipalayam, Coimbatore</p>
              <div className="marks-tag">HSC +2 Examination: 85.5 % </div>
            </div>

            {/* Higher Education */}
            <div className="card education-card current">
              <h3>Under Graduation :</h3>
              <h4>Rathinam Technical Campus</h4>
              <p className="degree">B.Tech Artificial Intelligence and Data Science</p>
              <div className="status-tag">Currently Pursuing</div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">

            {/* Achievement 1 */}
            <div className="card achievement-card">
              <h3>1. Meritorious And Student of the Year 2026 School Awards</h3>
              <p>Received meritorious and Student of the Year 2026 school awards from KGiSL College.</p>
            </div>

            {/* Achievement 3 */}
            <div className="card achievement-card">
              <h3>2. Innov8 Challenge</h3>
              <p>Received an Innov8 Challenge award conducted at the national level on 08.11.2024 for a project related to Agriculture and Rural Development.</p>
              <div className="certificate-placeholder">
              </div>
            </div>

            {/* Achievement 4 */}
            <div className="card achievement-card">
              <h3>3. Trinity London University Keyboard Examination</h3>
              <p>Completed the entrance/examination for musical instrument keyboard at Trinity College London and secured 93/100.</p>
             </div>

          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="card contact-card">
            <h3 className="contact-name">Sam Branham Christopher I</h3>
            
            <div className="contact-info">
              <p>
                <strong>Email: </strong>
                <a href="mailto:sambranhamchristopher@gmail.com">
                  sambranhamchristopher@gmail.com
                </a>
              </p>

              <p>
                <strong>GitHub: </strong>
                <a 
                  href="https://github.com/sambc31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://github.com/sambc31
                </a>
              </p>

              <p>
                <strong>LinkedIn: </strong>
                <a 
                  href="https://www.linkedin.com/in/sam-branham-christopher-i-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/sam-branham-christopher-i-
                </a>
              </p>

              <p> 
                <strong>Phone: </strong>
                <a href="tel:+919789358734" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                  +91 9789358734
                </a>
              </p>

              <p>
                <strong>Address: </strong>
                <div className="address"> <strong>
                  No. 25, Viswanathapuram 1st Street, Coimbatore , Tamil Nadu - 641034
                </strong></div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
