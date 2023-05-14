import React from "react";
import HeroContainer from "../Components/HeroContainer";
import Refrences from "../Components/Refrences";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
import CallToAction from "../Components/CallToAction";
import Cards from "../Components/Cards";
import Checklist from "../Components/Checklist";
import HouseStyling from "../Components/HouseStyling";
import Amenities from "../Components/Amenities";

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
        <HouseStyling />
        <Amenities />
        {/* <CallToAction /> */}
      </div>
    </>
  );
};

export default HomePage;
