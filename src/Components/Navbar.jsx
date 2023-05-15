import React from "react";
import "../assets/css/Navbar.css";

const Navbar = () =>{
    return(
        <>
        <div className="nav-container"> 
        <header sticky="top">
            <img src="https://www.ecobeachcity.com/wp-content/uploads/2022/09/Logo-new.png" alt="Eco Beach City Logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
            <a href="#" class="cta-button">Call to Action</a>
        </header>
        </div>
        </>
    )
}

export default Navbar;