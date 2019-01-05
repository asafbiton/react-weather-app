import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="section">
        <h1 className="title is-3">About</h1>
        <p className="subtitle is-6">
          This app was written in React using OpenWeatherMap API as a react
          exercise.
          <br /> It is available as an open source GitHub project.
        </p>
        <a
          className="button is-dark"
          href="https://github.com/asafbiton96/react-weather-app"
        >
          <span className="icon is-medium">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
      </div>

      <div className="section">
        <h3 className="title is-3">Tools</h3>
        <h5 className="subtitle is-6">
          Libraries and projects used in creation of this app.
        </h5>
        <ul>
          <li>
            <a href="https://github.com/miukimiu/react-kawaii">react-kawaii</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-icons-weather">
              react-icons-weather
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/maps/documentation/javascript/tutorial">
              Google Maps JS API
            </a>
          </li>
          <li>
            <a href="https://react-redux.js.org">react-redux</a>
          </li>
          <li>
            <a href="https://bulma.io">
              <img
                src="https://bulma.io/images/made-with-bulma--semiblack.png"
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
