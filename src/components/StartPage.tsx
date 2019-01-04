import React from "react";
import { Ghost } from "react-kawaii";
import Bubble from "./Bubble";

export default function StartPage() {
  return (
    <>
      <Bubble>
        <h1 className="title">Hello!</h1>
        <h3 className="subtitle">Welcome to my weather app!</h3>
        <p>Tell me where you are located so I can do my magic:</p>
        <p className="control has-icons-left">
          <input className="input" type="text" />
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
