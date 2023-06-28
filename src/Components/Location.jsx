import React from "react";
import "../assets/CSS/Location.css";
import locationimg from "../assets/Images/Location.png";

const Location = () => {
  return (
    <>
      <div className="location-section">
        <div className="info-section">
          <div className="left-img">
            <img src={locationimg} alt="" />
          </div>
          <div className="right-text">
            <section className="location-data">
              <h1>Where is Serene?</h1>
              <p>
              Serene Resorts is located in Wayanad, Kerala. Wayanad is a scenic and picturesque district located in the state of Kerala, India. Nestled amidst the lush Western Ghats, Wayanad is known for its abundant natural beauty, rich biodiversity, and vibrant culture. It is a popular destination for nature lovers, adventure enthusiasts, and those seeking a tranquil retreat. <br />
                <br />
                The region is characterized by rolling hills, dense forests, cascading waterfalls, and sprawling tea and coffee plantations. It is home to several wildlife sanctuaries and reserves, including the Wayanad Wildlife Sanctuary, where visitors can spot various species of flora and fauna, including elephants, tigers, leopards, and deer. 

              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
