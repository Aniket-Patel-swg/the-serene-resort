import React from "react";
import HeroContainer from "../Components/HeroContainer";
import Refrences from "../Components/Refrences";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
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
import AlternateCarousel from "../Components/Alternate_Carousel";

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
      title: "Bali Reinvented in Kerela",
      smalltitle: "SERENE RESORT - UNIQUE AND EXCLUSIVE TO GODS OWN COUNTRY",
      description:
        " Our resort offers a unique and diverse vacation experience with a range of accommodations and amenities to cater to every traveller's needs. From luxurious spa treatments to exhilarating outdoor activities, our resort provides a one-stop destination for relaxation, adventure, and entertainment. Guests can indulge in world-class dining, take a dip in our pristine pools, or explore the local culture through curated experiences. With something for everyone, our multi-concept resort promises to deliver an unforgettable vacation experience.",
    },
    {
      title: "Western Comforts in South India",
      smalltitle: "Enjoy Life at Safe Place",
      description:
        " Enjoy a range of stays such as Geodesic Domes, Glamping experiences, Pipe Hotels  airplane Stays and many more! Our on-site amenities such as multiple pools, a full-service spa, a fitness center, and several dining options. Located in a beautiful and tranquil setting, our resort is the perfect destination to relax, unwind, and create unforgettable memories.",
    },
    {
      title: "Discover Serene",
      smalltitle: "A PLACE TO REWIND ",
      description:
        "Our multi-concept resort is committed to providing our guests with an unforgettable and immersive experience that caters to their every need. Our mission is to create a welcoming environment that promotes relaxation, rejuvenation, and adventure, all while offering a range of amenities and activities that cater to a diverse range of interests. We aim to exceed our guests' expectations by providing exceptional customer service, luxurious accommodations, and a variety of dining options that showcase the best of local and international cuisine.",
    },
    // more descriptions...
  ];
  
  return (
    <>
      <div className="home-page">

        <div className="fixed_controls">
        <section className="scroll-button">
          <div className="back-to-top-btn" onClick={handleClick}>
            <ArrowDropUpIcon fontSize="large" />
          </div>
        </section>
        <section className="whatsapp-button">
          <a href="https://wa.me/+7990154651
          " target="_BLANK">
            <img src={WhatsAppimg} alt="" />
          </a>
        </section>
        </div>
        <HeroContainer />
        <Refrences />
        <Carousel images={images} descriptions={descriptions} />
        {/* <AlternateCarousel /> */}
        <Location />
        <Cards />
        <section id="services">
          <Checklist />
        </section>
        {/* <HouseStyling /> */}
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
