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
import Investment from "../Components/Investment";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import FinalCallToAction from "../Components/FinalCallToAction";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import '../assets/CSS/HomePage.css';
import WhatsAppimg from '../assets/Images/Whatsapp-icon.png';
import Footer from "../Components/Footer";

const HomePage = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // more images...
  ];
  
  const descriptions = [
    'Description for image 1',
    'Description for image 2',
    'Description for image 3',
    // more descriptions...
  ];
  return (
    <>
      <div className="home-page">
        <section className="scroll-button">
          <div className="back-to-top-btn" onClick={handleClick}>
            <ArrowDropUpIcon fontSize="large" />
          </div>
        </section>
        <seciton className="whatsapp-button">
          <a href="https://wa.me/+1234567890" target="_BLANK">
            <img src={WhatsAppimg} alt="" />
          </a>
        </seciton>
        <HeroContainer />
        <Refrences />
        {/*<Carousel images={images} descriptions={descriptions} />*/}
        <Location />
        <Cards />
        <Checklist />
        <HouseStyling />
        <Amenities />
        <Investment />
        {/* <CallToAction /> */}
        <AboutUs />
        <Team />
        <FinalCallToAction />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
