import React, { useState } from "react";
import "../assets/CSS/Cards.css";
import data from "../assets/Data/cards-data.json";

const Cards = () => {
  const [cardsData, setCardsData] = useState(data);
  return (
    <>
      <div className="cards-section">
        <section className="text-header">
          <h1>Why Serene?</h1>
          <p>
            Here are some great reasons to make Sumba your next home or
            investment
          </p>
        </section>
        <div className="serene-cards">
          {cardsData.map((cardData) => {
            return(
                <>
                <div className="cards">
                  <section className="card-img">
                    <img src={cardData.image} alt="" />
                  </section>
                  <section className="general-text">
                    <h3>{cardData.tagline}</h3>
                    <p>
                     {cardData.description}
                    </p>
                  </section>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
