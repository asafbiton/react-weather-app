import React from "react";

export default function Bubble({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="chat-bubble is-inline-block is-centered content">
      {children}
    </div>
  );
}
