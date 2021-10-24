import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p className="home__copy">
        Today we will be learning about styling React using SASS
      </p>
      <ul className="home__list-wrap">
        <li className="home__list-item">Various @rules</li>
        <li className="home__list-item">BEM convention</li>
        <li className="home__list-item">Atomic design</li>
      </ul>
    </div>
  );
};

export default Home;
