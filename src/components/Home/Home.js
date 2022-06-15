import React from "react";
import styles from "./HomeStyles"

const Home = () => {
  return (
    <div>
      <h2 style={styles.heading}>Home</h2>
      <p style={styles.para}>
        Today we will be learning about the different styling techniques in
        react
      </p>
      <ul style={styles.ul}>
        <li>CSS stylesheets</li>
        <li>Inline styles - for our home page</li>
        <li>CSS-in-JS</li>
        <li>CSS modules</li>
      </ul>
    </div>
  );
};

export default Home;
