import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { FaBars } from "react-icons/fa";
import {IoMdClose} from "react-icons/io"

const Navbar = ({ about, services, contact, cta }) => {
  
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setShowMediaIcons(false);
    setShowHamburger(false);
  };
 
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          <a
            href={cta}
            className="cta-button"
            onClick={(e) => smoothScroll(e, "#calltoaction")}
          >
            Call to Action
          </a>
          <section className="hamburger-menu">
            <a onClick={() => {setShowMediaIcons(!showMediaIcons); }}
            
            >
              {showHamburger ? (
                <IoMdClose onClick={() => setShowHamburger(false)} />
              ) : (
                <FaBars onClick={() => setShowHamburger(true)} />
              )}
            </a>
          </section>
          {showMediaIcons && (
            <>
              <section className="mobile-nav"
              
              style={{transform : showMediaIcons ? "translateX(0)" : "translateX(100%)"}}
              >
                <a href="#" onClick={() => {scrollToHome(); handleClick();}}>
                  Home
                </a>
                <a href={about} onClick={(e) => {smoothScroll(e, "#about"); handleClick();}}>
                  About Us
                </a>
                <a
                  href={services}
                  onClick={(e) => {smoothScroll(e, "#services"); handleClick();}}
                >
                  Services
                </a>
                <a href={contact} onClick={(e) => {smoothScroll(e, "#contact"); handleClick();}}>
                  Contact
                </a>
              </section>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
