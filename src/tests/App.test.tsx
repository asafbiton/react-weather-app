import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import { Bubble } from "../components";

it("renders without crashing", () => {
  document.head.innerHTML = `<script src="https://maps.googleapis.com/maps/api/js?key=${
    process.env.REACT_APP_GOOGLE_GEOCODE_API
  }&libraries=places"></script>`;
  document.body.innerHTML = `<div id="root"></div>`;
  const div = document.getElementById("root");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Bubble component", () => {
  it("renders children", () => {
    const component = shallow(
      <Bubble>
        <h1>Test</h1>
      </Bubble>
    );

    expect(component.children.length).toBe(1);
    expect(component.find("h1")).toBeTruthy();
    expect(component.find("h1").text()).toBe("Test");
  });
});
