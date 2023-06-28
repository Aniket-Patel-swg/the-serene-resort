import React, { useState } from "react";
import "../assets/CSS/Amenities.css";
import data from "../assets/data/aminities-data.json";

const Aminities = () => {
  const [aminitiesData, setAminitiesData] = useState(data);

  return (
    <>
      <div className="aminities-section">
        <h1>Exclusive Amenities</h1>
        <div className="aminities-cards">
          {aminitiesData.map((aminitieData) => {
            return (
              <>
                <section className="aminities-card">
                  <img src={aminitieData.image} alt={aminitieData.alt} />
                  <p>
                   {aminitieData.alt}
                  </p>
                </section>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Aminities;
