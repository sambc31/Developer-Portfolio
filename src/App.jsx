import React, { useEffect } from 'react';
import './App.css';
import profilePhoto from './profile.jpg';

function App() {
  // Scroll animation
  useEffect(() => {
    const sections = document.querySelectorAll(
      '#about, #skills, #education, #achievements, #contact'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          } else {
            entry.target.classList.remove('section-visible');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">

      {/*NAVIGATION*/}

      <header className="navbar navbar-card">
        <div className="nav-container">

          <h1 className="nav-logo">My Portfolio</h1>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#education">Education</a>
              </li>

              <li>
                <a href="#achievements">Achievements</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

        </div>
      </header>


      {/*HOME SECTION*/}

      <section className="hero-section" id="home">

        {/* Decorative dot pattern */}
        <div className="dot-pattern">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="code-decoration">
          &lt;/&gt;
        </div>

        <div className="circle-decoration circle-one"></div>
        <div className="circle-decoration circle-two"></div>
        <div className="circle-decoration circle-three"></div>

        <div className="hero-container">
          
          <div className="profile-card">

            <div className="profile-image-wrapper">
              <img
                src={profilePhoto}
                alt="Sam Branham Christopher"
                className="profile-image"
              />
            </div>


            <div className="social-links">

              <a
                href="https://github.com/sambc31"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                aria-label="GitHub"
              >
                <span>⌘</span>
              </a>


              <a
                href="https://www.linkedin.com/in/sam-branham-christopher-i-"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn"
              >
                in
              </a>


              <a
                href="mailto:sambranhamchristopher@gmail.com"
                className="social-btn email"
                aria-label="Email"
              >
                ✉
              </a>

            </div>

          </div>


          <div className="hero-content">

            <p className="welcome-text">
              WELCOME TO MY PORTFOLIO
            </p>

            <div className="title-line"></div>


            <h1>
              Hello!, I'm
              <span>Sam Branham Christopher I </span>
            </h1>


            <div className="course-badge">

              <span className="badge-icon"> 🎓    </span>
                
              <strong>
                B.Tech Artificial Intelligence &amp; Data Science Student
              </strong>

            </div>
            
            {/* College */}
            <div className="college-name">

              <span>🏫</span>

              <strong>
                Rathinam Technical Campus
              </strong>

            </div>


            {/* Description */}
            <p className="hero-description">
              A fresher student at{' '}
              <strong>Rathinam Technical Campus</strong>, currently pursuing{' '}
              <strong>
                B.Tech Artificial Intelligence and Data Science.
              </strong>{' '}
              Interested in software development, learning new skills,
              and building projects.
            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="primary-btn"
              >
                <span>👤</span>
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-decoration">
          <div className="bottom-dot"></div>
        </div>
      </section>

      <section
        id="about"
        className="section bg-light"
      >

        <div className="container">

          <h2 className="section-title">
            About Me
          </h2>

          <div className="card total-card">

            <div className="about-text">
              <strong>
                I'm Sam Branham Christopher, a B.Tech Artificial Intelligence and Data Science student at Rathinam Technical Campus with a growing interest in software development and technology.
I enjoy learning new technologies, exploring how applications are built, and turning ideas into practical projects. My journey into development has introduced me to technologies such as HTML, CSS, JavaScript, and React, while also helping me understand the importance of problem-solving and continuous learning.
  I have also participated in hackathons and received medals and awards for projects, including projects focused on solving real-world problems through technology. These experiences have motivated me to explore more areas of software development and AI.
My goal is to continuously improve my technical skills, build meaningful projects, and grow into a developer capable of creating technology that is both useful and impactful.
             </strong>
            </div>

          </div>

        </div>

      </section>

      <section

        id="skills"
        className="section"
      >

        <div className="container">

          <h2 className="section-title">
            Skills
          </h2>

          <div className="skills-grid">

            <div className="card skill-card total-card">

              <h3>
                Frontend
              </h3>

              <ul>
                <strong>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>React Router</li>
                  <li>Material UI</li>
                </strong>
              </ul>

            </div>

            <div className="card skill-card total-card">

              <h3>
                Programming
              </h3>

              <ul>
                <strong>
                  <li>Python (Learning)</li>
                  <li>JavaScript</li>
                  <li>C</li>
                </strong>
              </ul>

            </div>

            <div className="card skill-card total-card">

              <h3>
                Tools &amp; Development
              </h3>

              <ul>
                <strong>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Responsive Web Design</li>
                  <li>REST API Basics</li>
                </strong>
              </ul>

            </div>

            <div className="card skill-card total-card">

              <h3>
                AI &amp; Data Science
              </h3>

              <ul>
                <strong>
                  <li>Python for Data Science</li>
                  <li>NumPy</li>
                  <li>Data Visualization</li>
                  <li>Machine Learning Fundamentals</li>
                </strong>
              </ul>

            </div>

          </div>

        </div>

      </section>


      <section
        id="education"
        className="section bg-light"
      >

        <div className="container">

          <h2 className="section-title">
            Education
          </h2>


          <div className="education-list">

            {/* 10th */}
            <div className="card education-card total-card">

              <h3>
                10th Standard
              </h3>

              <h4>
                Bishop Francis Matriculation School
              </h4>

              <p className="location">
                <strong>
                  N.G.G.O Colony, Coimbatore
                </strong>
              </p>

              <span className="marks-tag">
                SSLC Examination: 96.4%
              </span>

            </div>

            <div className="card education-card total-card">

              <h3>
                11th and 12th Standard
              </h3>

              <h4>
                Sri Ramakrishna Matriculation Higher Secondary School
              </h4>

              <p className="location">
                <strong>
                  Vattamalaipalayam, Coimbatore
                </strong>
              </p>

              <span className="marks-tag">
                HSC +2 Examination: 85.5%
              </span>

            </div>


            <div className="card education-card total-card">

              <h3>
                Under Graduation
              </h3>

              <h4>
                Rathinam Technical Campus
              </h4>

              <p className="degree">
                <strong>
                  B.Tech Artificial Intelligence and Data Science
                </strong>
              </p>

              <span className="status-tag">
                Currently Pursuing
              </span>

            </div>

          </div>

        </div>

      </section>

      <section
        id="achievements"
        className="section"
      >

        <div className="container">

          <h2 className="section-title">
            Achievements
          </h2>


          <div className="achievements-grid">

            <div className="card achievement-card total-card">

              <h3>
                1. Meritorious and Student of the Year 2026 School Awards
              </h3>

              <p>
                <strong>
                  Received Meritorious and Student of the Year 2026 school
                  awards from KGiSL College.
                </strong>
              </p>

            </div>


            <div className="card achievement-card total-card">

              <h3>
                2. Innov8 Challenge
              </h3>

              <p>
                <strong>
                  Received an Innov8 Challenge award conducted at the national
                  level on 08.11.2024 for a project related to Agriculture
                  and Rural Development.
                </strong>
              </p>

            </div>


            <div className="card achievement-card total-card">

              <h3>
                3. Trinity College London Keyboard Examination
              </h3>

              <p>
                <strong>
                  Completed the keyboard examination conducted by Trinity
                  College London and secured 93/100.
                </strong>
              </p>

            </div>

          </div>

        </div>

      </section>

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container">

          <h2 className="section-title">
            Let's Connect
          </h2>


          <div className="contact-wrapper">

            <div className="contact-intro">

              <span className="contact-label">
                GET IN TOUCH
              </span>


              <h3>
                Let's build something
                <span> great together.</span>
              </h3>


              <p>
                I'm always interested in learning, building projects,
                and connecting with people who share a passion for
                technology and software development.
              </p>

              <div className="social-links">

                <a
                  href="https://github.com/sambc31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >

                  <span className="social-icon">
                    ⌘
                  </span>

                  <span>
                    GitHub
                  </span>

                  <span className="arrow">
                    ↗
                  </span>

                </a>


                <a
                  href="https://www.linkedin.com/in/sam-branham-christopher-i-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >

                  <span className="social-icon">
                    in
                  </span>

                  <span>
                    LinkedIn
                  </span>

                  <span className="arrow">
                    ↗
                  </span>

                </a>

              </div>

            </div>


            <div className="contact-details">

              {/* Email */}
              <a
                href="mailto:sambranhamchristopher@gmail.com"
                className="contact-detail"
              >

                <div className="detail-icon">
                  ✉
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                  sambranhamchristopher@gmail.com
                  </strong>
                </div>

                <span className="detail-arrow">
                  →
                </span>

              </a>


              <a
                href="tel:+919789358734"
                className="contact-detail"
              >

                <div className="detail-icon">
                  ☎
                </div>

                <div>
                  <span>
                    Phone
                  </span>

                  <strong>
                    +91 9789358734
                  </strong>
                </div>

                <span className="detail-arrow">
                  →
                </span>

              </a>


              <div className="contact-detail">

                <div className="detail-icon">
                  ⌖
                </div>

                <div>
                  <span>
                    Location
                  </span>

                  <strong>
                    Coimbatore, Tamil Nadu
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;