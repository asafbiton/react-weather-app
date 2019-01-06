import React from "react";
import { Bubble } from "./";
import { Ghost } from "react-kawaii";

const NoMatchPage = () => (
  <>
    <Bubble>
      <h1 className="title">Sorry!</h1>
      <h3 className="subtitle">Nothing to see here...</h3>
    </Bubble>
    <div className="character is-inline-block">
      <div className="character-component is-inline-block">
        <Ghost size={200} mood="sad" color="#FDA7DC" />
      </div>
      <div className="character-shadow" />
    </div>
  </>
);

export default NoMatchPage;
