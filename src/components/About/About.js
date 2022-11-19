import React from "react";
import logo from "../../logo.svg";

const About = () => {
  return (
    <div>
      <h2 className="heading">About</h2>
      <div>
        <img src={logo} alt="logo" width='200px' />
      </div>
    </div>
  );
};

export default About;
