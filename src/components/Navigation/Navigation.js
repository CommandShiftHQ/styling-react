import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact us</NavLink>
      </li>
      <a href="https://www.google.com">Google</a>
    </ul>
  );
};

export default Navigation;
