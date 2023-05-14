import React from "react";
import "../assets/CSS/Checklist.css";
import checklistimg from "../assets/Images/checklist-img.jpg";

const Checklist = () => {
  return (
    <>
      <div className="checklists">
        <div className="checklist-texts">
          <h3>Opening 2025</h3>
          <h1>You Dream It, We build it!</h1>
          <section className="checklist-lists">
            <section className="left-list">
              <ul>
                <li>Construct your own low-impact homes</li>
                <li>Install solar panels for renewable energy</li>
                <li>Use solar desalination plant for drinking water</li>
              </ul>
            </section>
            <section className="right-list">
              <ul>  
                <li>Use sustainable waste management systems</li>
                <li>Plant new corals to preserve the reef</li>
                <li>Establish a small recycling plant</li>
              </ul>
            </section>
          </section>
          <section className="more-texts">
            <p>
              suggest immersing yourself in the local culture from day one and
              actively participating in the daily life of the island. This will
              enhance your overall experience and allow you to fully embrace the
              vibrant atmosphere of the unique eco village and community.
            </p>
          </section>
        </div>
        <div className="left-blank-section"></div>
        <div className="right-photo-section">
          <img src={checklistimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Checklist;