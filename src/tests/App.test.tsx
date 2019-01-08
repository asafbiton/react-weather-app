import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import { Bubble } from "../components";
import googleMock from "./__mocks__/google-maps";

it("renders without crashing", () => {
  // Google Maps Places API Mock
  // @ts-ignore
  window.google = googleMock;

  const div = document.createElement("div");
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
