import React, { useState } from "react";
import "../assets/CSS/Alternate_Carousel.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const AlternateCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const itemHeight = 6;
  // const smallTitleHeight = 4;
  // const descriptionHeight = 13.5;

  const itemHeight = 6;
  const smallTitleHeight = 4;
  const descriptionHeight = 13.5;

  const carousel = [
    {
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The New Bali",
      smalltitle: "Kerela Unique and Exclusive",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo fuga quisquam distinctio commodi earum similique totam magni doloribus. Nam, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sapiente nostrum quo unde amet accusamus quas nulla aspernatur nihil harum.",
    },
    {
      image:
        "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Western Comforts in South India",
      smalltitle: "Enjoy Life at Safe Place",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo fuga quisquam distinctio commodi earum similique totam magni doloribus. Nam, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sapiente nostrum quo unde amet accusamus quas nulla aspernatur nihil harum.",
    },
    {
      image:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Discover Serene",
      smalltitle: "The only house you need",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo fuga quisquam distinctio commodi earum similique totam magni doloribus. Nam, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sapiente nostrum quo unde amet accusamus quas nulla aspernatur nihil harum.",
    },
    // more descriptions...
  ];

  function handleLeftButtonClick() {
    const newIndex = (activeIndex - 1 + carousel.length) % carousel.length;
    setActiveIndex(newIndex);
  }

  function handleRightButtonClick() {
    const newIndex = (activeIndex + 1) % carousel.length;
    setActiveIndex(newIndex);
    console.log(newIndex);
  }

  return (
    <>
      <div className="carousel_2">
        <div className="image_section">
          <div
            className="image_wrapper"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {carousel.map((item) => {
              return (
                <>
                  <img src={item.image} className="carousel_image" alt="" />
                </>
              );
            })}
          </div>
        </div>
        <div className="text_section">
          <section className="title_section">
            <div
              className="title_wrapper"
              style={{
                transform: `translateY(-${activeIndex * 100}%)`,
                height: `${itemHeight}vh`,
              }}
            >
              {carousel.map((item) => {
                return (
                  <>
                    <h1 className="title">{item.title}</h1>
                  </>
                );
              })}
            </div>
          </section>
          <section className="small_title_section">
            <div
              className="small_title_wrapper"
              style={{
                transform: `translateY(-${activeIndex * 100}%)`,
                height: `${smallTitleHeight}vh`,
              }}
            >
              {carousel.map((item) => {
                return (
                  <>
                    <h2 className="small_title">{item.smalltitle}</h2>
                  </>
                );
              })}
            </div>
          </section>
          <section className="description_section">
            <div
              className="description_wrapper"
              style={{
                transform: `translateY(${activeIndex * 103}%)`,
                height: `${descriptionHeight}vh`,
              }}
            >
              {carousel.map((item) => {
                return (
                  <>
                    <p className="description">{item.description}</p>
                  </>
                );
              })}
            </div>
          </section>
          <section className="buttons_section">
            <p>
              <FaArrowAltCircleLeft onClick={handleLeftButtonClick} />
            </p>
            <p>
              <FaArrowAltCircleRight onClick={handleRightButtonClick} />
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AlternateCarousel;
