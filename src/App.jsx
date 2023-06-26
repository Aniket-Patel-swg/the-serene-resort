import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import "./font.css";
import DummyLogin from "./Components/dummyLogin";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (password) => {
    if (password === "1Production@serene") {
      setLoggedIn(true);
    }
    else{
      alert('password is not correct')
    }
  };

  return (
    <>
      {loggedIn ? (
        <div className="main_div">
          <Navbar
            about="about"
            services="services"
            contact="contact"
            cta="calltoaction"
          />
          {/* Home page will contain all the components */}
          <HomePage />
        </div>
      ) : (
        <DummyLogin handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
