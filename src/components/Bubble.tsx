import React from "react";

const Bubble = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <div className="chat-bubble is-inline-block is-centered content">
    {children}
  </div>
);

export default Bubble;
