import React from "react";
import "../assets/css/Navbar.css";

const Navbar = ({ about, services, contact, cta }) => {
    const smoothScroll = (e, target) => {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    };
  
    const scrollToHome = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    return (
      <>
        <div className="nav-container">
          <header sticky="top">
            <img
              src="https://www.ecobeachcity.com/wp-content/uploads/2022/09/Logo-new.png"
              alt="Eco Beach City Logo"
            />
            <nav>
              <a href="#" onClick={scrollToHome}>
                Home
              </a>
              <a href={about} onClick={(e) => smoothScroll(e, "#about")}>
                About Us
              </a>
              <a href={services} onClick={(e) => smoothScroll(e, "#services")}>
                Services
              </a>
              <a href={contact} onClick={(e) => smoothScroll(e, "#contact")}>
                Contact
              </a>
            </nav>
            <a href={cta} className="cta-button" onClick={(e) => smoothScroll(e, "#calltoaction")}>
              Call to Action
            </a>
          </header>
        </div>
      </>
    );
  };

  export default Navbar;