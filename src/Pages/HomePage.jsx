import React from "react";
import HeroContainer from "../Components/HeroContainer";
import Refrences from "../Components/Refrences";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HeroContainer />
        <Refrences />
        <Carousel />
        <Location />
      </div>
    </>
  );
};

export default HomePage;
