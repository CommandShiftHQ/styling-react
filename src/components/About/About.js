import React from "react";
import logo from "../../logo.svg";
import css from './About.module.css'

const About = () => {
  return (
    <div>
      <h2 className={css.heading}>About</h2>
      <div>
        <p className={css.paragraph}>Welcome to our about page</p>
        <img src={logo} alt="logo" className={css.logo} />
      </div>
    </div>
  );
};

export default About;
