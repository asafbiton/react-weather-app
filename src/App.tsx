import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import "./App.scss";
import StartPage from "./components/StartPage";
import ForecastPage from "./components/ForecastPage";

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-background">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Router>
              <>
                <Route exact path="/" component={StartPage} />
                <Route
                  exact
                  path="/forecast/:location"
                  component={ForecastPage}
                />
              </>
            </Router>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
