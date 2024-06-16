import React from "react";
import Button1 from "./Button1";
const HeroImage = require("../assets/Mario and Adrian A.jpg")
const CallToAction = () => {
  return (
    <section className="hero-section">
      <div className="left-side">
        <h1 className="hero-display">Little Lemon</h1>
        <h2 className="hero-sub">Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati praesentium architecto, fugiat vero distinctio laudantium
          iusto velit rerum reiciendis error. Suscipit?
        </p>
        <Button1 text="Reserve a table" />
      </div>
    
      <div className="right-side">
        <img className="hero-img" src={HeroImage} alt="chefs" srcset="" />
      </div>
    </section>
  );
};

export default CallToAction;
