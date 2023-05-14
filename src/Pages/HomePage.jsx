import React from "react";
import HeroContainer from "../Components/HeroContainer";
import Refrences from "../Components/Refrences";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
import CallToAction from "../Components/CallToAction";
import Cards from "../Components/Cards";
import Checklist from "../Components/Checklist";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HeroContainer />
        <Refrences />
        <Carousel />
        <Location />
        <Cards />
        <Checklist />
        {/* <CallToAction /> */}
      </div>
    </>
  );
};

export default HomePage;
