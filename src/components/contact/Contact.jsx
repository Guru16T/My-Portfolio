import "./Contact.css";
import { ImLocation2 } from "react-icons/im";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import React, { useRef } from "react";
 
function Contact() {
 
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault(); 
 
    emailjs
      .sendForm(
        "service_ryhlm73", 
        "template_39w6oxb", 
        form.current,
        "ba2W9mhRxj1xJIId4"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, try again!");
        }
      );
  };
 
  return (
    <section className="contact-wrap" id="contact">
      <div className="container" data-aos="fade-up" id="msg">
 
        <div className="contact-head">
          <h1>Contact</h1>
          <p>
            I am a dedicated and motivated individual with a passion for learning and problem-solving. I strive to deliver high-quality work and continuously improve my skills in every project I undertake.
          </p>
        </div>
 
        <div className="contact-grid" data-aos="fade-up-right">
 
          <div className="contact-left">
 
            <div className="info-card">
              <div className="icon red">
                <ImLocation2 className="about-logo fs-4" /></div>
              <div>
                <h4>Address</h4>
                <p>Velachery,</p>
              </div>
            </div>
 
            <div className="info-card ">
              <div className="icon red">
                <IoCall className="about-logo fs-4" /></div>
              <div>
                <h4>Call Me</h4>
                <p>+91 9345550463</p>
              </div>
            </div>
 
            <div className="info-card">
              <div className="icon red">
                <IoMdMailUnread className="about-logo fs-4" />
              </div>
              <div>
                <h4>Email Me</h4>
                <p>gurupandiguru1@gmail.com</p>
              </div>
            </div>
 
          </div>
 
          <div className="contact-right" data-aos="fade-up-left" >
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
 
        </div>
      </div>
    </section>
  );
}
 
export default Contact;
