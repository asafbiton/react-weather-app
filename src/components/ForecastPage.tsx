import React, { Component, Props } from "react";
import { Router, match, RouteProps, RouteComponentProps } from "react-router";
import DarkSkyAPIWrapper from "../Utils/DarkSkyAPI";

export default class ForecastPage extends Component<RouteComponentProps<any>> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
  }

  async componentDidMount() {
    const api = new DarkSkyAPIWrapper();
    console.log(await api.getForecast("London, UK"));
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.location}</h1>
      </div>
    );
  }
}
