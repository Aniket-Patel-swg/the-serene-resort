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
              Dream Homes in <br /> Paradise from <br /> €65,000
            </p>
            <p className="basic-info-text">
              Discover the paradise island of Sumba, Indonesia, located just one
              hour away from Bali, and become a citizen and investor of Eco
              Beach City.
            </p>
            <section className="button-section">
              <button>
                <p>Get More Info</p>
              </button>
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
