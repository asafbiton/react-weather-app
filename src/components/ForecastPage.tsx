import React, { Component, Props } from "react";
import { Router, match, RouteProps, RouteComponentProps } from "react-router";
import WeatherAPIWrapper from "../Utils/WeatherAPIWrapper";
import Bubble from "./Bubble";
import { Ghost } from "react-kawaii";
import { ForecastState } from "../Interfaces/APIResonseInterfaces";
import WeatherIcon from "react-icons-weather";
import { connect } from "react-redux";
import { AxiosResponse } from "axios";

class ForecastPage extends Component<RouteComponentProps<any>, ForecastState> {
  api: WeatherAPIWrapper;

  constructor(props: RouteComponentProps<any>) {
    super(props);

    this.api = new WeatherAPIWrapper();

    this.state = {
      location: this.props.match.params.location,
      weatherData: {
        main: {},
        weather: []
      },
      dataReceived: false,
      hasError: false
    };

    this.refreshWeather = this.refreshWeather.bind(this);
  }

  componentDidMount() {
    this.refreshWeather();
  }

  componentDidUpdate(prevProps: RouteComponentProps<any>) {
    if (
      // @ts-ignore
      this.props.unit != prevProps.unit ||
      this.props.location != prevProps.location
    ) {
      this.refreshWeather();
    }
  }

  async refreshWeather() {
    let response: AxiosResponse<any>;

    try {
      response = await this.api.getForecast(
        this.state.location,
        // @ts-ignore
        this.props.unit
      );

      this.setState(state => {
        return {
          location: state.location,
          weatherData: response.data,
          dataReceived: true
        };
      });
    } catch (e) {
      this.setState({ hasError: true });
    }
  }

  renderMessage() {
    if (this.state.hasError) {
      return <p>Uh-oh! Something went wrong...</p>;
    }

    if (this.state.dataReceived) {
      return (
        <>
          <WeatherIcon
            name="owm"
            iconId={`${this.state.weatherData.weather[0].id}`}
            flip="horizontal"
            rotate="90"
          />
          <p>
            It seems that the weather in {this.state.location} is going to be{" "}
            {this.state.weatherData.weather[0].description} with a high of{" "}
            {this.state.weatherData.main.temp_max} and a low of{" "}
            {this.state.weatherData.main.temp_min}.
          </p>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  render() {
    return (
      <>
        <Bubble>{this.renderMessage()}</Bubble>
        <div className="character is-inline-block">
          <div className="character-component is-inline-block">
            <Ghost
              size={200}
              mood={this.state.hasError ? "sad" : "excited"}
              color="#FDA7DC"
            />
          </div>
          <div className="character-shadow" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  const unit = state.unit;
  return { unit };
};

export default connect(mapStateToProps)(ForecastPage);
