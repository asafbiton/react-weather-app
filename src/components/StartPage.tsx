import React, { Component } from "react";
import { Ghost } from "react-kawaii";
import { Bubble } from "./";
import WeatherAPIWrapper from "../Utils/WeatherAPIWrapper";
import { Redirect, RouteComponentProps } from "react-router-dom";

interface StartPageState {
  value: string;
  redirect: boolean;
}

export default class StartPage extends Component<
  RouteComponentProps<any>,
  StartPageState
> {
  api = new WeatherAPIWrapper();
  autocomplete = null;

  constructor(props: RouteComponentProps<any>) {
    super(props);

    this.state = {
      value: "",
      redirect: false
    };

    this.handlePlaceSelected = this.handlePlaceSelected.bind(this);
  }

  componentDidMount() {
    // @ts-ignore
    this.autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("locationInput"),
      {
        types: ["(cities)"]
      }
    );

    // @ts-ignore
    this.autocomplete.addListener("place_changed", this.handlePlaceSelected);
  }

  handlePlaceSelected() {
    if (this.autocomplete != null) {
      // @ts-ignore
      const selectedPlace = this.autocomplete.getPlace();
      this.setState((state, props) => {
        return { value: selectedPlace.formatted_address, redirect: true };
      });
    }
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={`/forecast/${this.state.value}`} />;
    }
  }

  render() {
    return (
      <>
        {this.renderRedirect()}
        <Bubble>
          <h1 className="title">Hello!</h1>
          <p>Tell me where you are located so I can do my magic:</p>
          <p className="control has-icons-left">
            <input id="locationInput" className="input" type="text" />
            <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt" />
            </span>
          </p>
        </Bubble>
        <div className="character is-inline-block">
          <div className="character-component is-inline-block">
            <Ghost size={200} mood="excited" color="#FDA7DC" />
          </div>
          <div className="character-shadow" />
        </div>
      </>
    );
  }
}
