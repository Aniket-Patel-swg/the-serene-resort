import React from "react";
import '../assets/css/Refrences.css';
import img1 from '../assets/Images/first.jpg';
import img2 from '../assets/Images/second.png';
import img3 from '../assets/Images/third.jpg';
import img4 from '../assets/Images/fourth.png';
import img5 from '../assets/Images/fifth.png';
import img6  from '../assets/Images/sixth.jpg';

const Refrences = () => { 
    return ( 
        <div className="refrences-container">
            <div className="refrence-div">
                <section className="text-section">
                    <p>
                        They talk about our projects
                    </p>
                </section>
                <section className="images-section">
                    <img id="image1" src={img1} alt="" />
                    <img id="image2"src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </section>
            </div>
        </div>
     );
}

export default Refrences;