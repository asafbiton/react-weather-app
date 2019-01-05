import React, { Component, Props } from "react";
import { Ghost } from "react-kawaii";
import Bubble from "./Bubble";
import WeatherAPIWrapper from "../Utils/WeatherAPIWrapper";

export default class StartPage extends Component {
  api = new WeatherAPIWrapper();

  constructor(props: Props<any>) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event: React.FormEvent<HTMLInputElement>) {
    const query = event.currentTarget.value;

    this.setState({ value: query });
    if (query.length > 0) {
      //const response = await this.api.getAutocomplete(query);
      //console.log(response);
    }

    var input = document.getElementById("locationInput");
    var options = {
      types: ["cities"]
    };
    // @ts-ignore
    let autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );
  }

  render() {
    return (
      <>
        <Bubble>
          <h1 className="title">Hello!</h1>
          <h3 className="subtitle">Welcome to my weather app!</h3>
          <p>Tell me where you are located so I can do my magic:</p>
          <p className="control has-icons-left">
            <input
              id="locationInput"
              className="input"
              type="text"
              onChange={this.handleChange}
            />
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
