import React from "react";
import '../assets/CSS/CallToAction.css';
import finalimg from '../assets/Images/call-to-action-img.jpg';

const CallToAction = () => {
    return ( 
        <>
            <div className="call-to-action">
            <section className="Final-text">
                <h2>
                    If you have already made up <br /> your mind, don't hesitate to <br /> contact us
                </h2>
                </section>
                <img src={finalimg} alt="" />
            </div>
        </>
     );
}
 
export default CallToAction;