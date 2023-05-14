import React from "react";
import "../assets/CSS/HouseStyling.css";
import HouseStylingimg from "../assets/Images/house-styling-img.jpg";

const HouseStyling = () => {
  return (
    <>
      <div className="house-styling">
        <div className="styling-image">
          <img src={HouseStylingimg} alt="" />
        </div>
        <div className="styling-text">
          <h2>What does your home look like? </h2>
          <p>
            See yourself in your very own studio or villa over 645 square feet.
            Surrounded by a pollution-free environment where you get around by
            foot, bicycle, or electric vehicle.
            <br /> <br />
            Discover a stunning landscape, spanning sixteen million square feet,
            facing an exotic beach, free from traffic, while offering all the
            amenities of a modern western city.
            <br /> <br />
            Experience an exotic rural vista where wellness, health, and
            tranquillity come together seamlessly.
            <br /> <br />
            As you stroll through Eco Beach City, you’ll encounter residential
            areas and shared facilities that are in harmony with the natural
            ecosystem.
          </p>
        </div>
      </div>
    </>
  );
};

export default HouseStyling;
