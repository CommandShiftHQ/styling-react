import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledUl = styled.ul`
  background-color: pink;
`;

const StyledNavLink = styled(NavLink)`
  background-color: darkblue;
  /* margin: 10px;
  color:${props => props.color}; */

  padding-right: 10px;
    border-right: 5px solid ${props => props.color};
`;

const Navigation = () => {
  return (
    <StyledUl>
      <li>
        <StyledNavLink to="/about" color="teal">About</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/" color="gold">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/contact-us" color="maroon">Contact us</StyledNavLink>
      </li>
    </StyledUl>
  );
};

export default Navigation;
