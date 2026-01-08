import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Project.css";

/* IMAGES */
import build from "./assets/const.png";
import port from "./assets/port.png";
import hotel from "./assets/hotel.png";
import web from "./assets/web.png"
import ai from "./assets/ai.png"
import food from "./assets/food.png"

const projects = [
  {
    title: "AI Powered IFSC Finder",
    subtitle: "AI-powered bank IFSC code search system",
    image: ai,
    github: "https://github.com/Guru16T/AI-IFSC-code-finder",
    live: "#",
    tech: ["Html", "Css", "Js", "Bootstrap", "React", "Next.js", "Nodejs", "MongoDB"],
  },
  {
    title: "Food Delivery App",
    subtitle: "Full stack food ordering platform",
    image: food,
    github: "",
    live: "#",
    tech: ["Html", "Css", "Js", "Bootstrap", "React", "Nodejs", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Modern personal portfolio using React",
    image: port,
    github: "https://github.com/Guru16T/My-Portfolio",
    live: "https://my-portfolio-ten-phi-32.vercel.app/",
    tech: ["Html", "Css", "Js", "Bootstrap", "React"],
  },
  {
    title: "Hotel Booking System",
    subtitle: "Room booking and Explore hotels",
    image: hotel,
    github: "https://github.com/Guru16T/Hotel-Booking-Site",
    live: "https://hotel-booking-site-ten.vercel.app/",
    tech: ["Html", "Css", "Js", "Bootstrap", "React"],
  },
  {
    title: "Architecture Site",
    subtitle: "Construction and architecture based website",
    image: build,
    github: "https://github.com/Guru16T/Architecture-Site",
    live: "https://guru16t.github.io/Architecture-Site/",
    tech: ["Html", "Css", "Js", "Bootstrap", "React"],
  },
  {
    title: "Professional Website",
    subtitle: "Professional website template design",
    image: web,
    github: "https://github.com/Guru16T/UI-Task",
    live: "https://guru16t.github.io/UI-Task/",
    tech: ["Html", "Css"],
  },
];

function Projects() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  const getIndex = (i) => (i + projects.length) % projects.length;

  return (
    <section className="projects-section" id="projects">
      <div className="container text-center" data-aos="fade-up">

        <div className="mb-5">
          <p className="home-color">PROJECT</p>
          <div className="about-border mx-auto"></div>
        </div>

        <div className="project-carousel position-relative d-flex justify-content-center align-items-center">

          <div className="side-card left d-none d-lg-block">
            <img src={projects[getIndex(index - 1)].image} alt="" />
          </div>

          <div className="center-card-wrapper px-3">
            <div className="project-card-main">
              <img src={projects[index].image} alt={projects[index].title} />

              <div className="project-info">
                <h3>{projects[index].title}</h3>
                <p>{projects[index].subtitle}</p>

                <div className="d-flex justify-content-center gap-2 flex-wrap mt-2">
                  {projects[index].tech.map((t, i) => (
                    <span key={i} className="badge tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links mt-3">
                  <a href={projects[index].github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={projects[index].live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="side-card right d-none d-lg-block">
            <img src={projects[getIndex(index + 1)].image} alt="" />
          </div>

          <button className="nav-arrow left" onClick={prev}>
            <FaArrowLeft />
          </button>
          <button className="nav-arrow right" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
