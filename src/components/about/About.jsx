import { useState, useEffect } from "react";
import "./About.css";
import guru from "./guru.jpg";
import Resume from "../resume/Resume";
import boot from "./skills/bootstrap.png";
import css from "./skills/css.png";
import express from "./skills/express js.png";
import html from "./skills/html.png";
import js from "./skills/javascript.png";
import mongo from "./skills/mongo db.png";
import node from "./skills/node js.png";
import react from "./skills/react.png";
import mysql from "./skills/my sql.png";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function About() {
  const [activeSkill, setActiveSkill] = useState("all");
  const [count, setCount] = useState(0);

  const skills = {
    all: [
      { name: "React.js", icon: react },
      { name: "JavaScript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Bootstrap", icon: boot },
      { name: "Node.js", icon: node },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongo },
      { name: "MySQL", icon: mysql },
    ],
    frontend: [
      { name: "React.js", icon: react },
      { name: "JavaScript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Bootstrap", icon: boot },
    ],
    backend: [
      { name: "Node.js", icon: node },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongo },
      { name: "MySQL", icon: mysql },
    ],
  };

  /* COUNT ANIMATION */
  useEffect(() => {
    let start = 0;
    const end = skills[activeSkill].length;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [activeSkill]);

  return (
    <div className="container-fluid py-5 bg-dark overflow-hidden" id="about">
      <div className="container" data-aos="fade-up">

        {/* TITLE */}
        <div className="text-center mb-5">
          <p className="home-color">ABOUT ME</p>
          <div className="about-border mx-auto"></div>
          <h2 className="text-white fw-light mt-3">About Me</h2>
          <p className="text-white-50 mt-3 lh-lg">
            I am a dedicated Full-Stack Developer with a strong foundation in
            Computer Science<br /> and hands-on experience in building modern web
            applications.
          </p>
        </div>

        <div className="row g-5 align-items-start">

          {/* LEFT PROFILE CARD */}
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up-right">
            <div className="card-bg text-center p-4 rounded-5">
              <img
                src={guru}
                alt="Guru"
                className="profile-img"
              />

              <h3 className="text-white mt-3">GURU PANDI M</h3>
              <span className="home-color fw-medium">
                Full Stack Developer
              </span>
              <p className="text-white mt-2">
                Fresher – Immediate Joiner
              </p>

              <div class="py-4">
                <a href="#" class="upload-btn text-white form-control py-3 border-0 rounded-3 "><i class="bi bi-download text-white"></i> Download CV</a><br />
                <a href="#contact" class="contact-btn form-control py-3 border-0 rounded-3"><i class="bi bi-envelope contact-icon"></i> Contact</a>
              </div>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <a className="about-links" href="https://www.linkedin.com/in/gurupandimurugan58/"><i className="bi bi-linkedin"></i></a>
                <a className="about-links" href="https://github.com/Guru16T/"><i className="bi bi-github"></i></a>
                <a className="about-links" href="mailto:gurupandiguru1@gmail.com"><i className="bi bi-envelope"></i></a>
                <a className="about-links" href="https://www.instagram.com/guru.58_"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-8 my-5">
            <div className="mb-4">
              <span className="px-2 py-1 rounded-5 py-2 fw-bold px-3 about-color">ABOUT ME</span><br /><br />
              <span className="text-white"> I am a Full Stack Developer (Fresher) with a strong foundation in Computer Science and
                hands-on experience in building web applications using JavaScript, Node.js, Express.js,
                MongoDB, and React.js.</span>
            </div>

            {/* INFO GRID */}
            <div className="row mb-4">
              {[
                ["bi-briefcase", "EXPERIENCE", "2+ Months"],
                ["bi-geo-alt", "LOCATION", "Chennai"],
                ["bi-phone", "PHONE", "+91 9345550463"],
                ["bi-mortarboard", "DEGREE", "M.Sc Computer Science"],
                ["bi-envelope", "EMAIL", "gurupandiguru1@gmail.com"],
                ["bi-calendar-check", "AVAILABILITY", "Open to work"],
              ].map(([icon, title, value], i) => (
                <div key={i} className="col-md-6 card-glow" data-aos="fade-up-left">
                  <div className="cards-bg d-flex align-items-center p-4 rounded-4 mb-4">
                    <i className={`bi ${icon} about-logo fs-2`}></i>
                    <div className="ms-3">
                      <small className="text-secondary">{title}</small>
                      <h6 className="text-white mb-0">{value}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div className="skills-wrapper" data-aos="fade-up-left">
              <div className="skills-card">

                <span className="section-tag">Core Skills</span>
                <h3 className="skills-title">Technical Proficiency</h3>

                {/* FILTER */}
                <div className="skills-filter">
                  {["all", "frontend", "backend"].map((type) => (
                    <button
                      key={type}
                      className={`filter-btn ${activeSkill === type ? "active" : ""}`}
                      onClick={() => setActiveSkill(type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* COUNT */}
                <p className="skill-count">
                  Showing <span>{count}</span> skills
                </p>

                {/* SKILL PILLS */}
                <div className="skills-grid">
                  {skills[activeSkill].map((skill, index) => (
                    <div key={index} className="skill-pill animate">
                      <img src={skill.icon} alt={skill.name} width="20" height="20" />
                      {skill.name}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div><br /><br />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
