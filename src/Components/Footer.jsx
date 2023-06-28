import React from "react";
import "../assets/CSS/Footer.css";
import logo from "../assets/Images/final_logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-elements">
          <section className="left-elements">
            <section className="logo-section">
              <img src={logo} alt="" />
            </section>
            <span className="links-section">
              <a href="/">The Island</a>
              <a href="/">Serene</a>
              <a href="/">Investment</a>
              <a href="/">How It works</a>
              <a href="/">Blog</a>
            </span>
            <section className="privacy-policy">
              <a href="/">Privacy Policy</a> <span>|</span>
              <a id="Cookies" href="/">
                Cookies Policy
              </a>
            </section>
          </section>
        </div>
        <div className="footer-contacts">
          <h3>Contact</h3>
          <p>
            <span>
              <EmailIcon />
            </span>
            <a href="mailto://contact@sereneresort.com">
              contact@sereneresort.com
            </a>
          </p>
          <p>
            <span>
              <ContactsIcon />
            </span>
            <a href="tel:+917990154651">
            +91 7990154651</a>
          </p>
          <p>
            <span>
              <LocationOnIcon />
            </span>
            The Serene
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
