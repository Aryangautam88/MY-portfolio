import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaFigma,
  FaHackerrank,
  FaGitAlt,
  //  SiVisualstudiocode,
  //  SiLeetcode, 
  //  SiVercel, 
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { FaGraduationCap, FaLaptopCode, FaRegFileAlt } from "react-icons/fa";
import { LuCornerDownRight } from "react-icons/lu";
import { SiExpress } from "react-icons/si";


import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    // IntersectionObserver for fade-in and fade-up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".fade-in, .fade-up")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ✅ Skills and Tools Data
  const skills = [
    { icon: <FaHtml5 className="icon html" />, name: "HTML" },
    { icon: <FaCss3Alt className="icon css" />, name: "CSS" },
    { icon: <FaJsSquare className="icon js" />, name: "JavaScript" },
    { icon: <FaReact className="icon react" />, name: "React" },
    { icon: <FaNodeJs className="icon node" />, name: "Node.js" },
    { icon: <FaJava className="icon java" />, name: "Java" },
    { icon: <FaPython className="icon python" />, name: "Python" },
  ];

  // ✅ Tools (with React Icons)
  const tools = [
    // { icon: <SiVisualstudiocode className="icon vscode" />, name: "VS Code" },
    { icon: <FaGitAlt className="icon git" />, name: "GitHub" },
    // { icon: <SiCursor className="icon cursor" />, name: "Cursor" },
    // { icon: <SiLeetcode className="icon leetcode" />, name: "Leetcode" },
    { icon: <FaHackerrank className="icon hackerrank" />, name: "HackerRank" },
    // { icon: <SiVercel className="icon vercel" />, name: "Vercel" },
    { icon: <FaFigma className="icon figma" />, name: "Figma" },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio showcasing my journey as a web developer.Designed and coded to reflect creativity, performance, and precision.",
      Tech: "React, CSS",
      buttons: [
        { text: "GitHub", link: "https://github.com/Aryangautam88/MY-portfolio" }
      ]
    },
    {
      title: "Qtrack",
      description: "Smart queue system for hospitals with real-time token updates and online booking.Simplifying patient flow and doctor coordination effortlessly.",
      Tech: "HTML,React, CSS",
      buttons: [
        { text: "GitHub", link: "https://github.com/Aryangautam88/Hospital-Token-System" }
      ]
    },
    {
      title: "3D-Design",
      description: "A visually immersive 3D animated experience built with precision and creativity.Showcasing dynamic motion, realistic lighting.",
      Tech: "HTML, CSS,JavaScript.",
      buttons: [
        { text: "GitHub", link: "https://github.com/Aryangautam88/3D-Design" }
      ]
    },
    {
      title: "Market.trad",
      description: "A finance-focused web concept, for a trading company, offering a modern interface for trading with sleek UI and real-time insights..",
      Tech: "React, CSS",
      buttons: [
        { text: "GitHub", link: "https://github.com/Aryangautam88/capexfrontend1234" }
      ]
    },
    {
      title: "EduConnect Hub",
      description: "Learning management portal for webinars, notes, and online sessions.",
      Tech: "React, CSS",
      buttons: [
        { text: "GitHub", link: "#" }
      ]
    },
    {
      title: "AI Chat Assistant",
      description: "AI-powered chatbot for instant support and automated responses.",
      Tech: "React, CSS",
      buttons: [
        { text: "GitHub", link: "#" }
      ]
    }
  ];



  return (
    <div id="main">


      <div id="home" className="portfolio-root">
        <div className="hero">
          <div className="center fade-in">
            <div className="image-wrap" aria-hidden="true">
              <img src="/Aryan.jpg" alt="Designer portrait" />
            </div>
          </div>

          <div className="left fade-in">
            <p className="intro">Hey, I'm Aryan,</p>
            <h1 className="title">
              <span className="title-block">A web</span>
              <span className="title-amp">Developer &nbsp;&amp;&nbsp;</span>
              <span className="title-block">DESIGNER</span>
            </h1>
            <p className="lead">
              Transforming ideas into powerful digital experiences — clean code, modern design, and seamless performance.
            </p>
            <button
              className="cta"
              onClick={() =>
                window.open("https://www.linkedin.com/in/aryan-gautam99/", "_blank")
              }
            >
              CONTACT ME <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <section className="info-bar fade-in" aria-label="Services">
          <div className="info-item">
            <h3>CLEAN & EFFICIENT CODE</h3>
            <p>Writing structured, maintainable, and performance-driven code that brings designs to life.</p>
          </div>
          <div className="info-item">
            <h3>FULL-STACK DEVELOPMENT</h3>
            <p>Building dynamic, scalable, and secure web applications with modern technologie.</p>
          </div>
          <div className="info-item">
            <h3>RESPONSIVE &amp; MODERN UI</h3>
            <p>Pixel-perfect designs optimized for all devices.</p>
          </div>
          <div className="info-item">
            <h3>OPTIMIZED PERFORMANCE</h3>
            <p>Delivering lightning-fast load times and smooth user interactions for better engagement.</p>
          </div>
        </section>
      </div>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-title-container">
          <h2 className="about-title">ABOUT ME</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hi! My name is Aryan and I'm a web Developer and Designer.</h3>
            <p>
              I started this web development journey because I believe most businesses still don’t use the full potential of the digital world to grow and stand out online — something I wanted to change.
                </p>
                <p>
              Anyone can have a website, but few truly leverage it as a powerful tool for growth. With the right design, performance, and strategy, a website becomes more than just pages — it becomes an experience that builds trust, attracts the right audience, and drives real results. My team and I help businesses craft high-performing, responsive, and user-focused websites that elevate their brand and take their digital presence to the next level.
            </p>

            <div className="hire">
              <button className="about-button"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1KOeDCiFcy29xp3ML1-kS8QBdQpr4XWho/view?usp=sharing", "_blank")
                }>Resume</button>

              <div className="social-icons">
                <a href="https://github.com/Aryangautam88" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aryan-gautam99/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="about-images">
            <div className="image-top"></div>
          </div>
        </div>
      </section>



      {/* ✅ Skills and Tools Section */}
      <section id="skills" className="skills-tools-section fade-up">
        <header className="skills-header">
          <h1>Skills and Tools</h1>
          <p>Technologies I use to build beautiful, performant web apps.</p>
        </header>

        <main className="skills-main">
          {/* SKILLS BOX */}
          <div className="skills-box">
            <div className="skills-grid">


              <div className="skill-card">
                <FaHtml5 className="icon icon-html" />
                <p className="skill-name">HTML</p>
              </div>

              <div className="skill-card">
                <FaCss3Alt className="icon icon-css" />
                <p className="skill-name">CSS</p>
              </div>

              <div className="skill-card">
                <FaJsSquare className="icon icon-js" />
                <p className="skill-name">JavaScript</p>
              </div>

              <div className="skill-card">
                <FaJava className="icon icon-java" />
                <p className="skill-name">Java</p>
              </div>

              <div className="tool-card">
                <img src="mdb1.webp" alt="" />
                <p className="skill-name">MongoDB</p>
              </div>

              <div className="tool-card">
                <img src="ex.webp" alt="" />
                <p className="skill-name">Express.js</p>
              </div>

              <div className="skill-card">
                <FaReact className="icon icon-react" />
                <p className="skill-name">React</p>
              </div>


              <div className="skill-card">
                <FaNodeJs className="icon icon-node" />
                <p className="skill-name">Node.js</p>
              </div>


            </div>



            <div className="skills-label">SKILLS</div>
          </div>

          {/* TOOLS BOX */}
          <div className="tools-box">
            <div className="tools-label">TOOLS</div>
            <div className="tools-grid">

              <div className="tool-card">
                <FaGitAlt className="icon icon-git" />
                <p className="tool-name">GitHub</p>
              </div>

              <div className="tool-card">
                <FaHackerrank className="icon icon-hackerrank" />
                <p className="tool-name">HackerRank</p>
              </div>

              <div className="tool-card">
                <img src="fg.webp" alt="" />
                <p className="tool-name">Figma</p>
              </div>

              <div className="tool-card">
                <img src="csc.webp" alt="" />
                <p className="tool-name">VScode</p>
              </div>

              <div className="tool-card">
                <img src="v.webp" alt="" />
                <p className="tool-name">vercel</p>
              </div>

              <div className="tool-card">
                <img src="lcode.webp" alt="" />
                <p className="tool-name">LeetCode</p>
              </div>
              <div className="tool-card">
                <img src="cur.webp" alt="" />
                <p className="tool-name">Cursor</p>
              </div>

            </div>

          </div>
        </main>



      </section>



      <section id="projects" className="projects-section">
        {/* Left side - Project Boxes */}
        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-box" key={index}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-Tech">{project.Tech}</p>

                <div className="project-buttons">
                  {project.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className="view-btn"
                      onClick={() => window.open(btn.link, "_blank")}
                    >
                      {btn.text} <span className="arrow">→</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Vertical Text */}
        <div className="vertical-text">MY PROJECT</div>
      </section>


      <section id="education" className="edu-exp-section fade-up">
        <h2 className="edu-exp-title">Education & Experience</h2>
        <p className="edu-exp-subtext">My academic background, work, and certifications.</p>

        <div className="edu-exp-container">
          {/* 🎓 Education */}
          <div className="edu-exp-block">
            <div className="edu-exp-heading">
              <FaGraduationCap className="edu-exp-icon" />
              <h3>Education</h3>
            </div>
            <ul className="edu-exp-list">
              <li><LuCornerDownRight className="edu-exp-icon" />Completed 10th & 12th from Govt. Excellence Higher Secondary School  with Grade A.</li>
              <li><LuCornerDownRight className="edu-exp-icon" />Pursuing B.Tech in Computer Science & Engineering at Bansal Institute of Science & Technology with 7.15 CGPA.</li>
            </ul>
          </div>

          {/* 💼 Experience */}
          <div className="edu-exp-block">
            <div className="edu-exp-heading">
              <FaLaptopCode className="edu-exp-icon" />
              <h3>Experience</h3>
            </div>
            <ul className="edu-exp-list">
              <li><LuCornerDownRight className="edu-exp-icon1" />Worked as a Web Development Intern at Capex Global Solution, gaining hands-on experience in building responsive and dynamic web interfaces.</li>
            </ul>
          </div>

          {/* 🏅 Certificates */}
          <div className="edu-exp-block">
            <div className="edu-exp-heading">
              <FaRegFileAlt className="edu-exp-icon" />
              <h3>Certificates</h3>
            </div>
            <ul className="edu-exp-list">
              <li><LuCornerDownRight className="edu-exp-icon" />C programming, Sheriyans coding school. [January, 2025]</li>
              <li><LuCornerDownRight className="edu-exp-icon" />C++, Udemy (at learning stage). [December, 2024]</li>
              <li><LuCornerDownRight className="edu-exp-icon" />Fundamentals of Azure AI, Microsoft. [November, 2024]</li>
              <li><LuCornerDownRight className="edu-exp-icon" />JavaScript Essentials 1, Cisco Networking Academy. [November, 2024]</li>
            </ul>
          </div>
        </div>
      </section>


      <footer className="footer">
        <h1 className="footer-logo">Aryan</h1>

        <div className="footer-top">
          <ul className="footer-links">
            <li>PROJECTS</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <hr />

        <div className="footer-middle">
          <ul className="footer-links secondary">
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>FAQ</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://github.com/Aryangautam88/"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aryan-gautam99/"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* === Bottom Section === */}
        <div className="footer-bottom-container">
          <div className="footer-contact">
            <p>📧 <a href="mailto:aryangautam999@gmail.com">gautamaryan285@gmail.com</a></p>
            <p>📞 <a href="tel:+919876543210">+91 9691043783</a></p>
          </div>

          <div className="footer-bottom">
            <p>
              <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
            </p>
            <p>© {new Date().getFullYear()} Aryan. All rights reserved.</p>
          </div>
        </div>
      </footer>




    </div>
  );
};

export default Portfolio;
