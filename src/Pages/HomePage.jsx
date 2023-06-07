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
import "../assets/CSS/HomePage.css";
import WhatsAppimg from "../assets/Images/Whatsapp-icon.png";
import Footer from "../Components/Footer";

const HomePage = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const images = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
    // more images...
  ];

  const descriptions = [
    {
      title: "The New Bali",
      smalltitle: "Kerela Unique and Exclusive",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accusantium quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi labore iste! Voluptas.",
    },
    {
      title: "Western Comforts in South India",
      smalltitle: "Enjoy Life at Safe Place",
      description:
        "Lorem, ipsum dolor sit amet . Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accu santium quo? Lorem ipsum dolor sit amet consectetur adipisicing  modi labore iste! Voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciatis esse",
    },
    {
      title: "Discover Serene",
      smalltitle: "The only house you need",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi ,vel deserunt eum, dolorum accusantium quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi labore iste! Voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciattas.",
    },
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
        <section className="whatsapp-button">
          <a href="https://wa.me/+7990154651" target="_BLANK">
            <img src={WhatsAppimg} alt="" />
          </a>
        </section>
        <HeroContainer />
        <Refrences />
        <Carousel images={images} descriptions={descriptions} />
        <Location />
        <Cards />
        <section id="services">
          <Checklist />
        </section>
        <HouseStyling />
        <Amenities />
        <Investment />
        {/* <CallToAction /> */}
        <section id="about">
          <AboutUs />
        </section>
        <Team />
        <section id="calltoaction">
          <FinalCallToAction />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default HomePage;
