import React from 'react';
import "./foot.css";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { RiArrowUpDoubleFill } from "react-icons/ri";

export default function CraftivoFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      <footer className="footer-section"  data-aos="fade-up">
        <div className="container">
          <div className="row g-5">
            {/* Brand Column */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <h2 className="footer-brand">Portfolio</h2>
              <p className="footer-description">
                Designed by Guru. Always learning, building, and exploring new web technologies.
              </p>
              <div className="social-icons">
                <a href="https://github.com/Guru16T/" className="social-icon" aria-label="Twitter">
                  <SiGithub className='w-50 h-auto' />
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <TiSocialFacebookCircular className='w-50 h-auto' />
                </a>
                <a href="https://www.instagram.com/guru.58_" className="social-icon" aria-label="Instagram">
                  <FaInstagram className='w-50 h-auto' />
                </a>
                <a href="https://www.linkedin.com/in/gurupandimurugan58/" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin className='w-50 h-auto' />
                </a>
              </div>
            </div>

            {/* Useful Links Column */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <h3 className="footer-title">Useful Links</h3>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
              </ul>
            </div>

            {/* Our Services Column */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI Design</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-info">
                <p>Velachery<br />Chennai<br /></p>
                <p><strong>Phone:</strong><br /> +91 9345550463</p>
                <p><strong>Email:</strong><br /> gurupandiguru1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 <strong>Guru</strong>. All rights reserved. Passionate about creating clean and interactive web experiences.</p>
          {/* <p>Designed by <a href="https://getbootstrap.com/">Bootstrap 5.3</a></p> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <RiArrowUpDoubleFill className='w-100 h-auto' />
      </button>
    </>
  );
}