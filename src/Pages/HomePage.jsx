import React from "react";
import HeroContainer from "../Components/HeroContainer";
import Refrences from "../Components/Refrences";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
import CallToAction from "../Components/CallToAction";
import Cards from "../Components/Cards";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HeroContainer />
        <Refrences />
        <Carousel />
        <Location />
        <Cards />
        {/* <CallToAction /> */}
      </div>
    </>
  );
};

export default HomePage;
