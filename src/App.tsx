import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import StartPage from "./components/StartPage";
import ForecastPage from "./components/ForecastPage";
import NoMatchPage from "./components/NoMatchPage";

class App extends Component {
  render() {
    return (
      <Router>
        <section className="hero is-fullheight is-background">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Switch>
                <Route exact path="/" component={StartPage} />
                <Route
                  exact
                  path="/forecast/:location"
                  component={ForecastPage}
                />
                <Route component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
