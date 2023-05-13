import React from "react";
import "../assets/CSS/Location.css";
import locationimg from "../assets/Images/Location.png";

const Location = () => {
  return (
    <>
      <div className="location-section">
        <div className="overlay"></div>
        <div className="info-section">
          <div className="left-img">
            <img src={locationimg} alt="" />
          </div>
          <div className="right-text">
            <section className="location-data">
              <h1>Where is Serene?</h1>
              <p>
                Sumba is located in Indonesia, just an hour’s flight from Bali
                and Lombok. This exotic island has two airports. The closest to
                our city, Tambolaka, is only 35 km away. <br />
                <br />
                 Sumba provides a rare
                sense of discovery, where ancient tribal culture and unspoiled
                natural beauty form a backdrop to an experience of unregulated
                freedom, understated luxury, and unforgettable memories.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
