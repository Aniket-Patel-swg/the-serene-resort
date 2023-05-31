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
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    'https://fastly.picsum.photos/id/1064/200/300.jpg?grayscale&hmac=aLRMn3dagvJ9N-yggNpG9lyEMRHqVqDLvTuRc8TeqIg',
    // more images...
  ];
  
  const descriptions = [
    {
      title : "title 1",
        smalltitle : " Lorem ipsum dolor sit amet.",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accusantium quo?"
    },
    {
      title : "title ",
      smalltitle : " Lorem ipsum  amet.",
      description : "Lorem, ipsum dolor sit amet . Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accusantium quo?"
    },
    {
      title : "title 1",
      smalltitle : " Lorem ipsum dolor sit .",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi ,vel deserunt eum, dolorum accusantium quo?"
    }
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
        <Carousel images={images} descriptions={descriptions} />
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
