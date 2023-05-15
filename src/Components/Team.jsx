import React, { useState } from "react";
import "../assets/CSS/Team.css";
import data from "../assets/data/agents-data.json";

const Team = () => {
  const [TeamData, setTeamData] = useState(data);
  return (
    <>
      <div className="team-section">
        <h1>Meet Our Agents</h1>
        <p>Our team will answer your questions</p>
        <section className="agents-section">
          {TeamData.map((TeamdsData) => {
            return (
              <>
                <div className="agent-div">
                  <img
                    src={TeamdsData.agentImage}
                    alt=""
                  />
                  <h3>{TeamdsData.agentName}</h3>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Team;
