import React from "react";
import "../assets/CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <h1>About us</h1>
        <p>Team Behind The Serene Resort</p>
        <div className="founder-section-card">
          <div className="founder-section">
            <section className="left-image-section">
              <img
                src="https://www.ecobeachcity.com/wp-content/uploads/2022/10/Frame-3.png"
                alt=""
              />
            </section>
            <section className="right-text-section">
              <h4>Carlos de Ory</h4>
              <h6>Investor & Founder</h6>
              <p>
                Carlos has over 10 years of experience in organizing start-up
                events, co-livings, travel websites, and real estate ventures.
                <br /> <br />
                With a successful track record in these fields, he has created
                and executed innovative business strategies that have
                consistently delivered positive results.
                <br /> <br />
                With extensive experience and an entrepreneurial spirit, Carlos
                is confident in his ability to drive business growth and success
                in any venture he undertakes.
              </p>
              <br />
              <img src="https://img.icons8.com/?size=1x&id=8808&format=png" alt="" />
              <img src="https://img.icons8.com/?size=1x&id=8824&format=png" alt="" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
