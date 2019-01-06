import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import { StartPage } from "./components";
import { ForecastPage } from "./components";
import { NoMatchPage } from "./components";
import { Navbar } from "./components";
import { About } from "./components";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
