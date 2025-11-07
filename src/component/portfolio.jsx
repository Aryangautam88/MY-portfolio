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

import "./Portfolio.css";

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
      description: "A personal website showcasing my skills, work, and contact details.",
    },
    {
      title: "Hospital Token System",
      description: "Smart queue management system with live token updates and doctor info.",
    },
    {
      title: "KrishiSetu App",
      description: "An app for farmers to claim crop insurance and track requests easily.",
    },
    {
      title: "Forex Trading Platform",
      description: "Real-time currency exchange and global trade dashboard for investors.",
    },
    {
      title: "EduConnect Hub",
      description: "Learning management portal for webinars, notes, and online sessions.",
    },
    {
      title: "AI Chat Assistant",
      description: "AI-powered chatbot for instant support and automated responses.",
    },
  ];

  return (
    <div id="main">
      <div className="portfolio-root">
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
              Transforming ideas into stunning visuals—UI/UX and brand design
              that captivates, engages, and delivers results.
            </p>
            <button className="cta">
              CONTACT ME <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <section className="info-bar fade-in" aria-label="Services">
          <div className="info-item">
            <h3>USER-CENTERED DESIGN</h3>
            <p>Intuitive and engaging experiences tailored for your audience.</p>
          </div>
          <div className="info-item">
            <h3>BRAND IDENTITY &amp; STRATEGY</h3>
            <p>Strong visual storytelling that makes your brand unforgettable.</p>
          </div>
          <div className="info-item">
            <h3>RESPONSIVE &amp; MODERN UI</h3>
            <p>Pixel-perfect designs optimized for all devices.</p>
          </div>
          <div className="info-item">
            <h3>SEAMLESS PROTOTYPING</h3>
            <p>Interactive mockups to bring ideas to life before development.</p>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-title-container">
          <h2 className="about-title">ABOUT ME</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hi! My name is Aryan and I'm a web Developer and Designer.</h3>
            <p>
              I created this social media marketing agency because I believe most
              businesses are not living up to their fullest potential on social
              media to maximize their business growth — something I wanted to
              help with.
            </p>
            <p>
              Anyone can have social media, but few businesses use the tool well.
              However, the right strategy leads to more than a place; it allows
              your brand to grow and scale rapidly by capturing your most
              qualified marketing through advanced clients like Instagram,
              Airtable, Later, Meta, and LinkedIn. My team and I are ready to
              help you develop strategies to attract your dream audience and
              ultimately take your business to new heights.
            </p>

            <div className="hire">
              <button className="about-button">Resume</button>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
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
      <section className="skills-tools-section fade-up">
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
                <FaReact className="icon icon-react" />
                <p className="skill-name">React</p>
              </div>

              <div className="skill-card">
                <FaNodeJs className="icon icon-node" />
                <p className="skill-name">Node.js</p>
              </div>

              <div className="skill-card">
                <FaJava className="icon icon-java" />
                <p className="skill-name">Java</p>
              </div>

              <div className="skill-card">
                <FaPython className="icon icon-python" />
                <p className="skill-name">Python</p>
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
                <p className="tool-name">vdcode</p>
              </div>

              <div className="tool-card">
                <img src="v.webp" alt="" />
                <p className="tool-name">vercel</p>
              </div>

              <div className="tool-card">
                <img src="logo.webp" alt="" />
                <p className="tool-name">HackerRank</p>
              </div>

            </div>

          </div>
        </main>



      </section>


      <section className="projects-section">
        {/* Left side - Project Boxes */}
        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-box" key={index}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <button className="view-btn">View Project</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Vertical Text */}
        <div className="vertical-text">MY PROJECT</div>
      </section>


    </div>
  );
};

export default Portfolio;
