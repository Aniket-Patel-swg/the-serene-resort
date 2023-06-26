import React, { useState } from "react";
import "../assets/CSS/DummyLogin.css";
import logo from "../assets/Images/final_logo.png";

const DummyLogin = ({ handleLogin }) => {
  const [password, setPassowrd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password);
  };

  return (
    <>
    <div className="centered">
      <div className="DummyLogin">
        <section className="img_section">
          <img src={logo} alt="" />
        </section>
        <h1>Team Login</h1>
        <section className="input_section">
          <input
            type="password"
            placeholder="Enter team password"
            value={password}
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}
          className="button-89"
          >
            Submit Password{" "}
          </button>
        </section>
      </div>
      </div>
    </>
  );
};

export default DummyLogin;
