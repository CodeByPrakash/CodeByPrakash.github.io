import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's build something great.</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Website</h4>
            <p>
              <a href="https://omprakashbehera.me" target="_blank" rel="noopener noreferrer" data-cursor="disable">
                omprakashbehera.me
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:omprakashbehera.cse@gmail.com" data-cursor="disable">
                omprakashbehera.cse@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917205252871" data-cursor="disable">
                +91 7205252871
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/CodeByPrakash"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/omprakash-cse"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/quasar_om/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://omprakashbehera.me/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Computer Science Engineer <br />
              Full-Stack Developer <br />
              <span>AI & Cyber Security</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
