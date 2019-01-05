import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import StartPage from "./components/StartPage";
import ForecastPage from "./components/ForecastPage";
import NoMatchPage from "./components/NoMatchPage";
import Navbar from "./components/Navbar";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <section className="hero is-fullheight-with-navbar is-background">
            <div className="hero-body">
              <div className="container has-text-centered">
                <Switch>
                  <Route exact path="/" component={StartPage} />
                  <Route exact path="/about" component={About} />
                  <Route
                    exact
                    path="/forecast/:location"
                    component={ForecastPage}
                  />
                  <Route component={NoMatchPage} status={404} />
                </Switch>
              </div>
            </div>
          </section>
        </>
      </Router>
    );
  }
}

export default App;
