import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/Contact/ContactUs";

import "./scss/app.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app-header">Styling React (with SASS)</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
