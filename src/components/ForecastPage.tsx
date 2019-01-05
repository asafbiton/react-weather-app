import React, { Component, Props } from "react";
import { Router, match, RouteProps, RouteComponentProps } from "react-router";
import WeatherAPIWrapper from "../Utils/WeatherAPIWrapper";
import Bubble from "./Bubble";
import { Ghost } from "react-kawaii";
import { ForecastState } from "../Interfaces/APIResonseInterfaces";

export default class ForecastPage extends Component<
  RouteComponentProps<any>,
  ForecastState
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);

    this.state = {
      location: this.props.match.params.location,
      weatherData: {
        main: {},
        weather: []
      },
      dataReceived: false
    };
  }

  async componentDidMount() {
    const api = new WeatherAPIWrapper();
    const response = await api.getForecast(this.state.location);

    console.log(response);

    this.setState((state, props) => {
      return {
        location: state.location,
        weatherData: response.data,
        dataReceived: true
      };
    });
  }

  render() {
    return (
      <>
        <Bubble>
          <h1 className="title">Hello!</h1>
          {this.state.dataReceived ? (
            <p>
              It seems that the weather in {this.state.location} is going to be{" "}
              {this.state.weatherData.weather[0].description} with a high of{" "}
              {this.state.weatherData.main.temp_max} and a low of{" "}
              {this.state.weatherData.main.temp_min}.
            </p>
          ) : (
            <p>Loading...</p>
          )}
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
