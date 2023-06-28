import React from "react";
import "../assets/css/HeroContainer.css";
import img from "../assets/Images/hero-image.png";

const HeroContainer = () => {
  return (
    <>
      <div className="hero-container">
        <div className="Main-section">
          <div className="main-texts">
            <p className="tagline">
              Dream Homes in <br /> Paradise
            </p>
            <p className="basic-info-text">
            Discover the paradise known as Wayanad located in Kerala, and become a citizen and investor of Serene Resort. 
            </p>
            <section className="button-section">
              <a href="https://wa.me/+7990154651" target="_blank">
              <button>
                <p>Get More Info</p>
              </button>
              </a>
            </section>
          </div>
          <div className="main-image">
            <img src={img} alt="hero" />
            {/* <img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png" alt="hero" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
