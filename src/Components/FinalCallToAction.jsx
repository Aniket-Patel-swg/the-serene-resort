import React from "react";
import "../assets/CSS/FinalCallToAction.css";
import FinalCallToActionimg from "../assets/Images/final-call-to-action-img.jpg";

const FinalCallToAction = () => {
  return (
    <>
      <div className="final-call-to-action">
        <div className="final-texts">
          <h2>
            If you have already made up <br /> your mind, don't hesitate to{" "}
            <br /> contact us
          </h2>
          <a href="https://wa.me/+7990154651" target="_blank">
            <button>Get More info</button>
          </a>
        </div>
        <img src={FinalCallToActionimg} alt="" />
      </div>
    </>
  );
};

export default FinalCallToAction;
