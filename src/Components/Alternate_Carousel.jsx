import React, { useState } from "react";
import "../assets/CSS/Alternate_Carousel.css";

const AlternateCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleLeftButtonClick() {
    const newIndex = (activeIndex - 1 + carousel.length) % carousel.length;
    setActiveIndex(newIndex);
  }

  function handleRightButtonClick() {
    const newIndex = (activeIndex + 1) % carousel.length;
    setActiveIndex(newIndex);
    console.log(newIndex);
  }

  const carousel = [
    {
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The New Bali",
      smalltitle: "Kerela Unique and Exclusive",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accusantium quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi labore iste! Voluptas.",
    },
    {
      image:
        "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Western Comforts in South India",
      smalltitle: "Enjoy Life at Safe Place",
      description:
        "Lorem, ipsum dolor sit amet . Fuga nisi perspiciatis esse. Ab quae vel deserunt eum, dolorum accu santium quo? Lorem ipsum dolor sit amet consectetur adipisicing  modi labore iste! Voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciatis esse",
    },
    {
      image:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Discover Serene",
      smalltitle: "The only house you need",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi ,vel deserunt eum, dolorum accusantium quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi labore iste! Voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi perspiciattas.",
    },
    // more descriptions...
  ];

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
          <div className="text_wrapper">
            {carousel.map((item)=>{
              return(
                <>
                    <p>
                      {item.title}
                    </p>
                </>
              )
            })}
            <button onClick={handleLeftButtonClick}>Left</button>
            <button onClick={handleRightButtonClick}>Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternateCarousel;
