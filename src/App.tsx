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
import { Helmet } from "react-helmet";

const App = () => (
  <Provider store={store}>
    <Helmet>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_GEOCODE_API
        }&libraries=places`}
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Helmet>
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
